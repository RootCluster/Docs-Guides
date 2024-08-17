---
sidebar_position: 1
---

# 项目介绍

使用 [Docusaurus 3.5.2](https://github.com/facebook/docusaurus/releases/tag/v3.5.2) 构建的文档手册静态页面示例项目，其他项目可使用该模板进行二次修改使用.

## 项目分支

```text title="项目分支"
Docs-Guides/
  ├── main                          # 文档 Style
  └── book                          # 书本 Style
```

## 要求

- [Node.js](https://nodejs.org/en/download): 18.0+
- [Yarn](https://yarn.nodejs.cn/en/docs/install#windows-stable): 1.20+

## 项目结构

```text {18-20,34-37,44} showLineNumbers title="高亮部分是多版本管理部分"
Docs-Guides/
  ├── blog                          # 博客文章目录
  │   └── 2020-05-30-hola.md
  ├── docs                          # 文档目录
  │   ├── doc1.md
  │   ├── doc2.md
  │   ├── doc3.md
  │   └── mdx.md
  ├── i18n
  │   └── zh-Hans                   # 简体中文翻译位置
  │       ├── docusaurus-plugin-content-blog  # 项目根目录 blog（结构相同） 对应翻译
  │       │   ├── ...
  │       │   └── doc1.md
  │       ├── docusaurus-plugin-content-docs  # 项目根目录 docs（结构相同） 对应翻译
  │       │   ├── current           # 项目根目录 docs 最新版本
  │       │   │   ├── ...
  │       │   │   └── doc1.md
  │       │   ├── version-1.0       # 项目根目录 docs 历史版本
  │       │   │   ├── ...
  │       │   │   └── doc1.md
  │       │   └── current.json      # 多示例版本号
  │       ├── docusaurus-plugin-theme-classic
  │       │   │── footer.json       # 页脚
  │       │   └── navbar.json       # 导航栏
  │       └── code.json             # 定义了 React 代码中使用的所有文本标签
  ├── src                           # 页面或自定义的 React 组件目录
  │   ├── css
  │   │   └── custom.css
  │   └── pages
  │       ├── styles.module.css
  │       └── index.js
  ├── static                        # 静态文件目录（可以放一些和版本无关的静态文件）
  │   └── img
  ├── versioned_docs                # 多版本实例
  │   └── version-1.0/
  ├── versioned_sidebars            # 多版本实例侧边栏
  │   └── version-1.0-sidebars.json
  ├── babel.config.js
  ├── docusaurus.config.ts          # 项目配置（核心配置）
  ├── package.json                  # 项目依赖管理
  ├── README.md                     # 项目解释 README
  ├── sidebars.ts                   # 文档侧边栏配置文件
  ├── tsconfig.json
  └── versions.json
```

## 额外集成

- [x] 简单示例：多语言
- [x] 插件集成
  - [x] 图片预览：react-medium-image-zoom
  - [x] 本地搜索：docusaurus-search-local
  - [x] 图表支持：theme-mermaid
- [ ] 多版本
- [ ] 打包脚本增强
- [ ] 离线 PDF 生成

## 相关操作

```bash
# clone 项目
git clone https://github.com/RootCluster/Docs-Guides.git
# 安装依赖
cd docs-guides && yarn install

# 按需调整配置（查看下一节）

# 本地预览, 默认英文
yarn start
# 指定语言预览
yarn run start --locale zh-Hans
# build
yarn build


# 如何升级
# 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest

# 如果你使用的 npm，那么先安装 npm-check 包
npm install -g npm-check
# 使用命令检查更新, a 键选择所有, i 键反选选择
npm-check -u
```

## 快速使用



## 其他

- 搜索功能
  - 暂时先使用 [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
  - 等待 [issues-205](https://github.com/cmfcmf/docusaurus-search-local/issues/205)
- 离线PDF
  - [docusaurus-prince-pdf](https://github.com/signcl/docusaurus-prince-pdf)
