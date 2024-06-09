---
sidebar_position: 2
title: 多语言
---

翻译 `docs/intro.md` 路径文件为简体中文（zh-Hans）.

## 配置 i18n

修改 `docusaurus.config.js` 文件，添加 `zh-Hans` 语言配置:

```js title="docusaurus.config.js"
export default {
  i18n: {
    # 默认语言
    defaultLocale: 'en',
    # 多语言配置
    locales: ['en', 'zh-Hans'],
  },
};
```

## 翻译

```bash npm2yarn
# 推荐使用该命令会统一将 docs blog 等复制到指定语言目录下，并生成相关的侧边栏文件等
yarn write-translations --locale zh-Hans
```

### 翻译 blog

这里是单独翻译 blog 操作

```bash npm2yarn
# 创建 i18n/zh-Hans/docusaurus-plugin-content-blog/ 文件夹
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-blog/
# 拷贝 docs/intro.md
cp blog/2024-06-06-docs.md i18n/zh-Hans/docusaurus-plugin-content-blog/2024-06-06-docs.md 
```

### 翻译 docs

这里是单独翻译 docs 操作

```bash npm2yarn
# 创建 i18n/zh-Hans/docusaurus-plugin-content-docs/current/ 文件夹
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current/
# 拷贝 docs/intro.md
cp docs/intro.md i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md
```

## 本地化预览

```bash npm2yarn
# 中文简体本地化预览
npm run start -- --locale zh-Hans
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## 添加语言下拉列表

修改 `docusaurus.config.js` 文件:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

语言下拉列表出现在导航栏中

![Locale Dropdown](./img/localeDropdown.png)

## 构建本地化站点

Build your site for a specific locale:

```bash npm2yarn
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash npm2yarn
npm run build
```
