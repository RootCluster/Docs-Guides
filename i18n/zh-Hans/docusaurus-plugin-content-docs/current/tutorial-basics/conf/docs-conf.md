---
sidebar_position: 0
title: 文档 Style
---

import Zoom from 'react-medium-image-zoom';

这里所说的 文档 Style，指的<font color="red">**具有 Home 页**</font>，这种风格很适合作为综合技术类的网站，比如一些[案例展示](https://docusaurus.io/zh-CN/showcase)

<Zoom>
![docs-style](/img/docs-style.png)
</Zoom>

## docusaurus 配置

```ts showLineNumbers title="docusaurus.config.ts"
const config: Config = {
  title: 'Docs-Guides',
  tagline: 'Docs Demo',
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

更多相关的 [docusaurus.config.js](https://docusaurus.io/zh-CN/docs/api/docusaurus-config) 配置
