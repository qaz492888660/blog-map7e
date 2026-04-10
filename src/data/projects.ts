export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "map7e-blog",
		title: "Map7e Blog",
		description:
			"基于 Astro 和 Mizuki 搭建的个人博客，用来记录生活、代码与思考。",
		image: "/assets/projects/mizuki.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		sourceCode: "https://github.com/qaz492888660",
		visitUrl: "https://blog.map7e.com",
		startDate: "2026-04-10",
		featured: true,
		tags: ["博客", "前端", "个人站点"],
	},
	{
		id: "personal-tools",
		title: "个人折腾记录",
		description:
			"用于记录网站配置、工具折腾和日常开发过程的持续更新项目。",
		image: "/assets/projects/mizuki.webp",
		category: "other",
		techStack: ["Markdown", "TypeScript", "Astro"],
		status: "planned",
		sourceCode: "https://github.com/qaz492888660",
		startDate: "2026-04-10",
		featured: true,
		tags: ["计划中", "记录", "个人项目"],
	},
];

export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
