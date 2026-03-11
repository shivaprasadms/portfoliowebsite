import type { Link } from "../types";

export interface Project {
  name: string;
  summary: string;
  techStack: string;
  image: string;
  links: Link[];
}

export const projects: Project[] = [
  {
    name: "LocalShare",
    summary: `Share files via phone and pc using local network

              -> Multicast is used to broadcast IP & PORT to clients
              
              -> TCP is used to transfer data              
              `,
    techStack: "C#,  .NET,  WPF",
    image: "/projects/localshare.webp",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shivaprasadms/LocalShare",
      },
    ],
  },
  {
    name: "LocalShare Android App",
    summary: "Android App for LocalShare Desktop Application",
    techStack: "C#, .NET, Xamarin",
    image: "/projects/localshare-android.webp",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shivaprasadms/LocalShare-Android",
      },
    ],
  },

];
