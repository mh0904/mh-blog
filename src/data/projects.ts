import algorithm from "@/images/algorithm.svg?raw";
import { getCldImageUrl } from "astro-cloudinary/helpers";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  type: string;
  icon: string;
  message?: string;
}

export const projects: Project[] = [
  {
    title: "Leetcode 算法笔记",
    description:
      "Leetcode 算法题练习，包括 Top 100, Top 100, Sort ... 等类目, 每个类目都有详细的解题思路和代码实现, 帮助开发者提升算法能力和面试准备。",
    tags: ["Vitepress", "Leetcode", "Top 100", "Top 100", "Sort"],
    image: getCldImageUrl({
      src: "1_0HMd3UBqpu478hk_HbhEaA_zpijaz",
      width: 500,
    }),
    link: "/projects/leetcode/",
    type: "algorithm",
    icon: algorithm,
  },
];
