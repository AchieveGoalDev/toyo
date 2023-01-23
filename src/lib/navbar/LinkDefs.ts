export type LinkData = {
	href: string;
	jpText: string;
	enText: string;
	icon: string;
	iconAlt: string;
};

export const links = [
	{
		href: '/',
		jpText: 'ホーム',
		enText: 'Home',
		icon: '/Icons/home.svg',
		iconAlt: 'ホームリンクのアイコン'
	},
	{
		href: '/about',
		jpText: 'キャンパス内留学とは？',
		enText: 'About TAE',
		icon: '/Icons/info.svg',
		iconAlt: 'キャンパス内留学についてのアイコン'
	},
	{
		href: '/faq',
		jpText: 'よくある質問',
		enText: 'Q&A',
		icon: '/Icons/question.svg',
		iconAlt: 'よくある質問のアイコン'
	},
	{
		href: '/news',
		jpText: '新着情報',
		enText: 'News',
		icon: '/Icons/news.svg',
		iconAlt: '新着情報のアイコン'
	}
];
