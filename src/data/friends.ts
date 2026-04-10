export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "代码托管与项目记录平台",
		siteurl: "https://github.com/qaz492888660",
		tags: ["代码", "平台"],
	},
	{
		id: 2,
		title: "Bilibili",
		imgurl: "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		desc: "视频、收藏和日常内容的主要平台",
		siteurl: "https://space.bilibili.com/3017899",
		tags: ["视频", "内容"],
	},
];

export function getFriendsList(): FriendItem[] {
	return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
