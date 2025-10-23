export type NavigationLink = {
  text: string;
  url: string;
};

export const MAIN_NAV_LINKS: NavigationLink[] = [
  {
    text: "projects",
    url: "#projects",
  },
  {
    text: "about",
    url: "#about",
  },
  {
    text: "blog",
    url: "/blog",
  },
  {
    text: "resume",
    url: "#resume",
  },
  {
    text: "contact",
    url: "#contact",
  },
];

export const BLOG_NAV_LINKS: NavigationLink[] = [
  {
    text: "All Posts",
    url: "/blog",
  },
];

export const SITE_CONFIG = {
  siteName: "Daniel Taylor",
  logoUrl: "/",
  blogLogoUrl: "/blog",
};
