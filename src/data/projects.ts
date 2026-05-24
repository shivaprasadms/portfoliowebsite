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
    {
    name: "Boardspace - Collaborative Whiteboard",
    summary: "Real-time collaborative whiteboard built with ASP.NET Core MVC, SignalR, and HTML5 Canvas. Supports multi-user drawing, live synchronization, and persistent storage of drawing elements.",
    techStack: "C#, ASP.NET Core, EF Core, SignalR",
    image: "/projects/localshare-android.webp",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shivaprasadms/BoardSpace---Collaborative-Whiteboard",
      },
    ],
  },
    {
    name: "Voyage AI - Multi Agent Travel Planner",
    summary: "AI-powered travel planning application with multiple autonomous agents for itinerary creation and optimization.",
    techStack: "Python, Langgraph, streamlit",
    image: "/projects/voyage.webp",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shivaprasadms/Voyage-AI---Multi-Agent-Travel-Planner",
      },
    ],
  },
    {
    name: "EDURAG - Syllabus-Aware Examination & Grading System",
    summary: "Syllabus-aware RAG platform for automated exam generation & multimodal grading.",
    techStack: "python,langchain, streamlit",
    image: "/projects/localshare-android.webp",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shivaprasadms/EduRag",
      },
    ],
  },

];
