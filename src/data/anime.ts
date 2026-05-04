export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "进击的巨人",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/lkls.webp",
		description: "人类与巨人之间的生存之战，节奏紧凑，压迫感很强。",
		episodes: "87 集",
		year: "2013",
		genre: ["动作", "悬疑", "战斗"],
		studio: "WIT Studio / MAPPA",
		link: "https://www.bilibili.com/",
		progress: 87,
		totalEpisodes: 87,
		startDate: "2013-04",
		endDate: "2023-11",
	},
	{
		title: "死亡笔记",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/rynh.webp",
		description: "天才对决与道德博弈并行的经典悬疑作品，张力很足。",
		episodes: "37 集",
		year: "2006",
		genre: ["悬疑", "推理", "心理"],
		studio: "MADHOUSE",
		link: "https://www.bilibili.com/",
		progress: 37,
		totalEpisodes: 37,
		startDate: "2006-10",
		endDate: "2007-06",
	},
	{
		title: "龙珠",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/cmmn.webp",
		description: "热血冒险与武道对决的代表作，影响了很多后来的作品。",
		episodes: "153 集",
		year: "1986",
		genre: ["冒险", "热血", "战斗"],
		studio: "Toei Animation",
		link: "https://www.bilibili.com/",
		progress: 153,
		totalEpisodes: 153,
		startDate: "1986-02",
		endDate: "1989-04",
	},
	{
		title: "火影忍者",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/laxxx.webp",
		description: "围绕羁绊、成长和忍者世界展开的长篇热血故事。",
		episodes: "220 集",
		year: "2002",
		genre: ["热血", "冒险", "忍者"],
		studio: "Studio Pierrot",
		link: "https://www.bilibili.com/",
		progress: 220,
		totalEpisodes: 220,
		startDate: "2002-10",
		endDate: "2007-02",
	},
	{
		title: "海贼王",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/tz1.webp",
		description: "追寻梦想与自由的航海冒险，世界观庞大，篇章持续展开。",
		episodes: "1000+ 集",
		year: "1999",
		genre: ["冒险", "热血", "海贼"],
		studio: "Toei Animation",
		link: "https://www.bilibili.com/",
		progress: 1000,
		totalEpisodes: 1000,
		startDate: "1999-10",
		endDate: "",
	},
];

export default localAnimeList;
