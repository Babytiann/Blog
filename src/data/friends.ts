// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
  id: 1,
  title: "HikariLan 贺兰星辰",
  imgurl: "https://assets.hikarilan.life/avatar.png",
  desc: "半栈工程师",
  siteurl: "https://hikarilan.life",
  tags: ["友链"],
},
{
  id: 2,
  title: "MicroWorld",
  imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=2109714162&spec=640&img_type=jpg",
  desc: "沉迷Coding的小八",
  siteurl: "https://www.hayrsiane.com/",
  tags: ["友链"],
},
{
  id: 3,
  title: "吃土的小智",
  imgurl: "https://blog.ctdxz.com/avatar.webp",
  desc: "我家还蛮大的.jpg",
  siteurl: "https://blog.ctdxz.com",
  tags: ["友链"],
},

];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
