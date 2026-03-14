export interface VideoProject {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  provider: "youtube" | "vimeo" | "hosted";
  category: "wedding" | "project";
}

export const videoProjects: VideoProject[] = [
  // Wedding Videos from Nav
  {
    id: "aQQ40Iegko8",
    title: "Häävideo Wedding video Vanessa ja Vesa, Finland",
    url: "https://www.youtube.com/watch?v=aQQ40Iegko8",
    thumbnail: "https://img.youtube.com/vi/aQQ40Iegko8/maxresdefault.jpg",
    provider: "youtube",
    category: "wedding",
  },
  {
    id: "Qj16eqM0Ze4",
    title: "Häävideo | Wedding video | Emmi & Lauri | Pornainen | Finland |",
    url: "https://www.youtube.com/watch?v=Qj16eqM0Ze4",
    thumbnail: "https://img.youtube.com/vi/Qj16eqM0Ze4/maxresdefault.jpg",
    provider: "youtube",
    category: "wedding",
  },
  {
    id: "Isi5ZiFfoFs",
    title: "Summer Wedding In Espoo, Uusimaa, Finland #wedding #finland",
    url: "https://www.youtube.com/watch?v=Isi5ZiFfoFs",
    thumbnail: "https://img.youtube.com/vi/Isi5ZiFfoFs/maxresdefault.jpg",
    provider: "youtube",
    category: "wedding",
  },
  // Projects from videos.html / extraction
  {
    id: "63bbf47d56086f6c6f30bc2b",
    title: "Jesse Vainaan Varjot - Kallio Helsinki",
    url: "https://video.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d1f8c3ef-ba70-4feb-9953-0e46ac1da63d/hls.m3u8", // Placeholder for hosted video path
    provider: "hosted",
    category: "project",
  },
  {
    id: "bGsd-RKtiEc",
    title: "Golden-Cut Parturi Promo",
    url: "https://www.youtube.com/watch?v=bGsd-RKtiEc",
    provider: "youtube",
    category: "project",
  },
];
