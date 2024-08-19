---
sidebar_position: 0
title: Docusaurus config
---

## Project config adjustment

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
          src: 'img/logo_dark.svg',
          // dark 主题 logo
          srcDark: 'img/logo_dark.svg',
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

## Sidebar Config

There are two ways to sidebar, one is manual configuration, and the other is automatically generated according to the folder name under docs.

### Manual config

```ts showLineNumbers title="sidebars.ts"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

### Automatic generation

## Theme color

Available by [Infima](https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima) generate theme colors

```css title="src/css/custom.css"
/* 默认颜色. */
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* dark 模式颜色. */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
```

## Code snippet

:::info

- Docusaurus: [Default supported highlighted languages](https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23)
- Prism: [Configurable support language](https://prismjs.com/#supported-languages)

:::

The following shows the language configuration that Docusaurus does not support by default.

```ts title="docusaurus.config.ts"
const config: Config = {
  themeConfig: {
    prism: {
      // highlight-start
      additionalLanguages: [
        'java',
        'bash',
        'json'
      ],
      // highlight-end
    }
  }
}
```

> In 3.4.0 Version, [Due to jiti version issues](https://github.com/facebook/docusaurus/issues/10199#issuecomment-2149368485)，Add languages not supported by Docusaurus，It does not take effect. The version of `jiti` can be mandatory.
>
> ```json title="package.json"
>   "resolutions": {
>     "jiti": "1.21.0"
>   },
> ```

## .md Example Zoom

import Zoom from 'react-medium-image-zoom';

<Zoom>
![docusaurus](https://docusaurus.io/zh-CN/assets/images/slash-introducing-411a16dd05086935b8e9ddae38ae9b45.svg)
</Zoom>
