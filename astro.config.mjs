import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  // 替换成你自己的 GitHub 地址
  site: 'https://mh0904.github.io', 
  
  // 显式指定为静态模式，防止它乱跑
  output: 'static', 

  integrations: [
    tailwind(), 
    sitemap()
  ],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
  // 先不要加 markdown 插件和 image service，等页面跑通了再加
});