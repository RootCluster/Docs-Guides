---
sidebar_position: 1
---

# Introduction

Use [Docusaurus 3.4.0](https://github.com/facebook/docusaurus/releases/tag/v3.4.0) build a static page sample project of the document manual, and other projects can use this template for secondary modification.

## Demand

- [Node.js](https://nodejs.org/en/download): 18.0+
- [Yarn](https://yarn.nodejs.cn/en/docs/install#windows-stable): 1.20+

## Project structure

```text title="The highlighted part is the multi-version management part"
docs-guides
  ├── blog                          # 博客文章目录
  │   └── 2020-05-30-hola.md
  ├── docs                          # 文档目录
  │   ├── doc1.md
  │   ├── doc2.md
  │   ├── doc3.md
  │   └── mdx.md
  ├── i18n
  │   └── zh-Hans                   # 简体中文翻译位置
  │       ├── docusaurus-plugin-content-docs
  │       │   ├── current
  │       │   │   ├── ...           # 要与 docs 目录结构相同的文件翻译
  │       │   │   └── doc1.md
// highlight-start
  │       │   ├── version-1.0
  │       │   │   ├── ...           # 要与 docs 目录结构相同的文件翻译
  │       │   │   └── doc1.md
// highlight-end
  │       │   └── current.json      # 侧边栏
  │       ├── docusaurus-theme-classic
  │       │   └── navbar.json       # 导航栏
  │       ├── docusaurus-plugin-content-blog
  │       │   ├── ...               # 要与 blog 目录结构相同的文件翻译
  │       │   └── doc1.md
  │       └── code.json             # 定义了 React 代码中使用的所有文本标签
  ├── src                           # 页面或自定义的 React 组件目录
  │   ├── css
  │   │   └── custom.css
  │   └── pages
  │       ├── styles.module.css
  │       └── index.js
  ├── static                        # 静态文件目录
  │   └── img
// highlight-start
  ├── versioned_docs                           # 页面或自定义的 React 组件目录
  │   └── version-1.0/
  ├── versioned_sidebars                           # 页面或自定义的 React 组件目录
  │   └── version-1.0-sidebars.json
// highlight-end
  ├── babel.config.js
  ├── docusaurus.config.ts          # 配置文件目录
  ├── package.json                  # 项目依赖管理
  ├── README.md                     # 项目解释 README
  ├── sidebars.ts                   # 文档侧边栏配置文件
  ├── tsconfig.json
// highlight-start
  └── versions.json
// highlight-end
```

## Related operations

```bash
# clone project
git clone https://github.com/RootCluster/Docs-Guides.git
# install dependency
cd docs-guides && yarn install

# Adjust the configuration as needed (see next section)

# Local preview, default en
yarn start
# Specify language preview
yarn run start --locale zh-Hans
# build
yarn build


# How to upgrade
# You need to manually select the upgraded dependency package, press the space bar to select, a key to switch all, i key to reverse selection.
yarn upgrade-interactive --latest

# if use npm, npm install npm-check package
npm install -g npm-check
# check npm, a key to switch all, i key to reverse selection
npm-check -u
```

## Config adjustment

Can refer to [Docusaurus config](tutorial-basics/docusaurus-conf.md)

## Integrated functions

- [x] Simple example: Multilingual
- [x] Plugin integration
  - [x] Picture preview: react-medium-image-zoom
  - [x] Local search: docusaurus-search-local
  - [x] Mermaid support: theme-mermaid
- [ ] Multiple versions
- [ ] Packaging Script Enhancement
- [ ] Offline PDF generation

## Other

- Search function
  - Temporary use [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
  - Await [issues-205](https://github.com/cmfcmf/docusaurus-search-local/issues/205)
- Offline PDF
  - [docusaurus-prince-pdf](https://github.com/signcl/docusaurus-prince-pdf)
