export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[];
	certifications?: string[];
	color?: string;
}

export const skillsData: Skill[] = [
	{
		id: "astro",
		name: "Astro",
		description: "当前博客主要使用的静态站点框架。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 0 },
		projects: ["map7e-blog"],
		color: "#FF5D01",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "用于博客配置、脚本和前端逻辑开发。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["map7e-blog"],
		color: "#3178C6",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "用于快速搭建和调整页面样式。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["map7e-blog"],
		color: "#06B6D4",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description: "用于本地开发、依赖管理和脚本执行。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#339933",
	},
	{
		id: "markdown",
		name: "Markdown",
		description: "用来写博客文章和页面内容。",
		icon: "simple-icons:markdown",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["map7e-blog"],
		color: "#000000",
	},
	{
		id: "git",
		name: "Git",
		description: "用于版本管理和代码同步。",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F05032",
	},
];
