import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
		{
		id: "current-study",
		title: "Studying Computer Science and Technology",
		description:
			"目前正在学习计算机科学与技术，专注于 Web 开发和 AI",
		type: "education",
		startDate: "202X-09-01",
		location: "BuJiDao",
		organization: "BuJiDao University",
		skills: ["TypeScript", "React", "Vue", "HTML/CSS", "MySQL"],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "piko-ai-agent",
		title: "Piko AI",
		description:
			"一个整合 LLM 和 VLM 的 AI Agent 平台，聚焦账单识别、出游规划和每日穿衣建议等生活场景。",
		type: "project",
		startDate: "2026-03-01",
		skills: ["LLM", "VLM", "Function Calling", "SSE", "SubAgent", "Monorepo"],
		achievements: [
			"引入 subAgent 机制，先做输入预处理与任务拆解，再按场景动态调整 top-k 和 temperature，部分场景响应速度提升约 63.1%",
			"面向旅游场景强化 Function Calling，接入 OTA API、定位与地图 deeplink，提升结果可用性并减少幻觉",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Babytiann/Piko",
				type: "project",
			},
		],
		icon: "material-symbols:smart-toy",
		color: "#0F766E",
		featured: true,
	},
	{
		id: "openinula-website",
		title: "OpenInula2.0 交互式教程&官网",
		description:
			"以 Next.js + Nextra 为基础构建官网与交互式教程系统，为 Inula 框架提供文档、在线 Playground 和一体化体验；作为 2025 年中科院开源之夏（OSPP）社区项目顺利结项。",
		type: "project",
		startDate: "2025-07-01",
		endDate: "2025-10-31",
		skills: ["Next.js", "Nextra", "SSE", "Monorepo", "Playground", "Open Source"],
		achievements: [
			"对原有高度耦合的 REPL 组件进行模块化拆分与重构，并基于现代 UI 组件重新封装，提升可扩展性和视觉表现",
			"通过 SSE 打通官网教程页与内嵌 REPL 的实时通信链路，实现代码编辑与运行结果的毫秒级同步预览",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Babytiann/OpenInula-Website",
				type: "project",
			},
		],
		icon: "material-symbols:language",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "meowtalk",
		title: "MeowTalk",
		description:
			"个人全栈开发的 LLM 对话平台，支持连续对话、聊天记录查阅和接近 ChatGPT 官网的交互体验。",
		type: "project",
		startDate: "2025-03-01",
		endDate: "2025-04-30",
		skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "MySQL"],
		achievements: [
			"使用 SSE 解决普通 HTTP 无法流式输出 AI 对话消息的问题，实现实时向前端推送回复内容",
			"引入 Markdown-it 与 Highlight.js 处理并美化模型返回的 Markdown 文本，尽量还原 ChatGPT 的对话样式",
			"结合 JWT 鉴权与 Axios 的 token 自动注入，完成登录保护和请求身份透传",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Babytiann/MeowTalk",
				type: "project",
			},
		],
		icon: "material-symbols:chat",
		color: "#7C3AED",
	},
	{
		id: "trackpoint-platform",
		title: "TrackPoint 埋点管理平台",
		description:
			"字节跳动青训营大项目，基于 React 构建的数据可视化平台，实现用户行为监控、页面性能监控和多维数据分析。",
		type: "project",
		startDate: "2025-01-01",
		endDate: "2025-02-28",
		skills: ["React", "Vite", "Tailwind CSS", "ECharts", "Express", "MySQL"],
		achievements: [
			"封装埋点 SDK，统一采集和上报链路，降低后续页面接入成本",
			"使用 ECharts 实现按日期、事件类型等维度的数据分析，支持饼图、折线图等可视化展示",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Babytiann/MeowTrackPoint",
				type: "project",
			},
		],
		icon: "material-symbols:analytics",
		color: "#EA580C",
	},
	{
		id: "rcore-os-kernel",
		title: "rCore 操作系统内核",
		description:
			"清华大学操作系统训练营 2024 秋季 Lab 实验，基于 Rust 开发的 RISC-V 操作系统内核，提供分时多任务、SV39 虚拟内存和 QEMU 运行支持。",
		type: "project",
		startDate: "2024-09-01",
		endDate: "2024-11-30",
		skills: ["Rust", "RISC-V", "QEMU", "SV39", "Filesystem", "Concurrency"],
		achievements: [
			"实现基本系统调用，如 sys_mmap、sys_spawn 等，补齐基础用户态能力",
			"实现文件系统硬链接支持，并补充操作系统级并发锁支持与死锁检测",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Babytiann/2024a-rcore-Babytiann",
				type: "project",
			},
		],
		icon: "material-symbols:terminal",
		color: "#059669",
	},
];
