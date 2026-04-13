import { type CollectionEntry, getCollection } from "astro:content";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export interface DiaryItem {
	id: string;
	title: string;
	slug: string;
	contentHtml: string;
	date: string;
	description: string;
	images: string[];
	location?: string;
	mood?: string;
	tags: string[];
}

function renderDiaryMarkdown(markdown: string) {
	const rendered = marked.parse(markdown || "") as string;

	return sanitizeHtml(rendered, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			img: ["src", "alt", "title", "width", "height", "loading", "decoding"],
			a: ["href", "name", "target", "rel"],
		},
	});
}

function getDiarySlug(entry: CollectionEntry<"diary">) {
	const configuredSlug = entry.data.slug?.trim();
	if (configuredSlug) {
		return configuredSlug;
	}

	return entry.id.replace(/\.md$/i, "").split("/").pop() || entry.id;
}

function getDiaryImages(entry: CollectionEntry<"diary">) {
	const merged = [
		entry.data.cover?.trim(),
		...(entry.data.images || []).map((image) => image.trim()),
	].filter(Boolean) as string[];

	return Array.from(new Set(merged));
}

export async function getDiaryList(limit?: number): Promise<DiaryItem[]> {
	const diaryEntries = await getCollection("diary");

	const sortedData = diaryEntries
		.filter((entry) => !entry.data.draft || !import.meta.env.PROD)
		.map((entry) => ({
			id: entry.id,
			title: entry.data.title,
			slug: getDiarySlug(entry),
			contentHtml: renderDiaryMarkdown(
				entry.body || entry.data.description || "",
			),
			date: entry.data.date.toISOString(),
			description: entry.data.description || "",
			images: getDiaryImages(entry),
			location: entry.data.location || undefined,
			mood: entry.data.mood || undefined,
			tags: entry.data.tags || [],
		}))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
}

export async function getAllTags(): Promise<string[]> {
	const diaryList = await getDiaryList();
	const tags = new Set<string>();

	diaryList.forEach((item) => {
		item.tags.forEach((tag) => {
			const trimmedTag = tag.trim();
			if (trimmedTag) {
				tags.add(trimmedTag);
			}
		});
	});

	return Array.from(tags).sort();
}
