export type LinkData = {
  href: string;
  jpText: string;
  enText: string;
  icon: string;
  iconAlt: string;
};

export type NavbarContent = {
  color: string;
  navText: string;
  links: LinkData[];
};

export const mainNav = {
  color: "red",
  navText: "英語講座",
  links: [
    {
      href: "/",
      jpText: "ホーム",
      enText: "Home",
      icon: "/Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
    },
    {
      href: "/about",
      jpText: "キャンパス内留学とは？",
      enText: "About TAE",
      icon: "/Icons/info.svg",
      iconAlt: "キャンパス内留学についてのアイコン",
    },
    {
      href: "/faq",
      jpText: "よくある質問",
      enText: "Q&A",
      icon: "/Icons/question.svg",
      iconAlt: "よくある質問のアイコン",
    },
    {
      href: "/",
      jpText: "新着情報",
      enText: "News",
      icon: "/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
    },
    {
      href: "/special",
      jpText: "学外特別講座",
      enText: "Open",
      icon: "",
      iconAlt: "",
    },
  ],
};

export const specialNav = {
  color: "blue",
  navText: "特別講座",
  links: [
    {
      href: "/special",
      jpText: "学外特別講座",
      enText: "Home",
      icon: "Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
    },
    {
      href: "#",
      jpText: "新着情報",
      enText: "News",
      icon: "/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
    },
    {
      href: "/",
      jpText: "本講座",
      enText: "University",
      icon: "",
      iconAlt: "",
    },
  ],
};
