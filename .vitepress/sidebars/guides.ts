import { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/guides/",
      },
    ],
  },
  {
    text: "User Guide",
    items: [
      {
        text: "Installation",
        link: "/guides/user_guide/installation",
      },
      {
        text: "Running on a VPS",
        link: "/guides/user_guide/vps",
      },
      {
        text: "Running in Docker",
        link: "/guides/user_guide/docker",
      },
      {
        text: "Proxying Local Traffic",
        link: "/guides/user_guide/proxy_local",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "JWT Decode",
        link: "/guides/workflows/jwt_decode",
      },
    ],
  },
  {
    text: "Contributions",
    items: [
      {
        text: "Documentation",
        link: "/guides/contributions/documentation",
      },
    ],
  },
];
