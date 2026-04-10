export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "iPhone 12 Pro Max",
			image: "/images/device/oneplus13t.webp",
			specs: "石墨色 / 256GB",
			description: "目前日常主力机，主要用于拍照、社交和移动办公。",
			link: "",
		},
	],
	路由器: [
		{
			name: "红米 AX6000",
			image: "/images/device/mt3000.webp",
			specs: "Wi-Fi 6 / 千兆宽带",
			description: "家里常用路由器，负责日常网络覆盖和多设备连接。",
			link: "",
		},
	],
};
