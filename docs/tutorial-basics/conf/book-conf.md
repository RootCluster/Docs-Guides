---
sidebar_position: 1
title: Book config
---

import Zoom from 'react-medium-image-zoom';

The Book Style mentioned here refers to a website that does <font color="red">**not have a Home page**</font>. This style is very suitable for the output of pure technical content. It is a replacement of [hugo-book](https://hugo-book-demo.netlify.app).

<Zoom>
![docs-style](/img/docs-style.png)
</Zoom>

## docusaurus config

```shell
rm -rf src/components/HomepageFeatures
rm -rf src/pages/*
```

```ts showLineNumbers title="docusaurus.config.ts"
const config: Config = {
  title: 'Book-Guides',
  tagline: 'Book Demo',
  // 网站 ico 图标
  favicon: 'img/favicon.ico',
  // 项目的最终访问地址
  url: '',
  // 项目子路径，按需配置
  // 如果不存在子目录，这里配置为 '/'，因此最终访问地址为 https://domain-name
  // 本项目示例子目录 'guide/'，因此最终访问地址为 https://domain-name/guide/
  baseUrl: 'guide/',
  themeConfig: {
      navbar: {
        // 左上角导航名字
        title: 'Docs Guides',
        logo: {
          // logo 描述
          alt: 'My Site Logo',
          // 默认主题 logo
          src: 'img/logo.svg',
          // dark 主题 logo
          srcDark: 'img/logo.svg',
          // 指定开始页（定位到 docs 目录下的 intro 文件）
          // 如果指定 logo 跳转到指定 docs 目录(没有主页，很适合作为文档风格)，则配置 '/docs/intro'，
          // 默认是该网站的首页 '/'
          href: '/'
        },
        ...
      }
  }
}
```

More related docusaurus.config.ts configurations are available [docusaurus.config.js](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)
