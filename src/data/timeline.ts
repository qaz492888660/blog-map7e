import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "blog-restart",
		title: "博客重新搭建完成",
		description:
			"开始把个人博客整理成长期维护的版本，用来记录生活、代码和思考。",
		type: "project",
		startDate: "2026-04-10",
		location: "中国",
		organization: "Map7e Blog",
		skills: ["Astro", "Markdown", "TypeScript"],
		achievements: [
			"完成主题替换与基础配置",
			"整理首页与文章结构",
			"开始发布第一篇正式文章",
		],
		icon: "material-symbols:edit-note",
		color: "#059669",
		featured: true,
	},
	{
		id: "write-records",
		title: "开始记录日常与折腾",
		description:
			"把生活记录、网站折腾过程和一些零散想法慢慢沉淀下来。",
		type: "achievement",
		startDate: "2026-04-10",
		skills: ["写作", "记录", "整理"],
		achievements: [
			"确定博客作为长期内容阵地",
			"文章、分类和标签开始稳定整理",
		],
		icon: "material-symbols:favorite",
		color: "#7C3AED",
		featured: true,
	},
];
