import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

const s3 = PUBLIC_IMAGE_BUCKET_URL;

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
      icon: s3 + "images/Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
    },
    {
      href: "/about",
      jpText: "キャンパス内留学とは？",
      enText: "About TAE",
      icon: s3 + "images/Icons/info.svg",
      iconAlt: "キャンパス内留学についてのアイコン",
    },
    {
      href: "/details",
      jpText: "講座情報",
      enText: "Details",
      icon: s3 + "images/Icons/details.svg",
      iconAlt: "講座情報のアイコン",
    },
    {
      href: "/faq",
      jpText: "よくある質問",
      enText: "Q&A",
      icon: s3 + "images/Icons/question.svg",
      iconAlt: "よくある質問のアイコン",
    },
    {
      href: "/apply",
      jpText: "講座申込",
      enText: "Apply",
      icon: s3 + "images/Icons/apply.svg",
      iconAlt: "申し込みのアイコン",
    },
    {
      href: "/news",
      jpText: "新着情報",
      enText: "News",
      icon: s3 + "images/Icons/news.svg",
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
      jpText: "特別講座ホーム",
      enText: "Home",
      icon: s3 + "images/Icons/home.svg",
      iconAlt: "ホームリンクのアイコン",
    },
    {
      href: "/special/specialnews",
      jpText: "新着情報",
      enText: "News",
      icon: s3 + "images/Icons/news.svg",
      iconAlt: "新着情報のアイコン",
    },
    {
      href: "/special/public",
      jpText: "学外向け講座",
      enText: "Public",
      icon: s3 + "",
      iconAlt: "",
    },
    {
      href: "/special/students",
      jpText: "学内向け講座",
      enText: "Students",
      icon: s3 + "",
      iconAlt: "",
    },
    {
      href: "/special/specialfaq",
      jpText: "よくあるご質問",
      enText: "Q&A",
      icon: s3 + "",
      iconAlt: "",
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
