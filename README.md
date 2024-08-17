# Docs-Guides

使用 [Docusaurus](https://docusaurus.io/) 构建的文档手册静态页面示例项目，其他项目可使用该模板进行二次修改使用

## 要求

- [Node.js](https://nodejs.org/en/download): 18.0+
- [Yarn](https://yarn.nodejs.cn/en/docs/install#windows-stable): 1.20+

## 项目结构

```text
docs-guides
  ├── blog                          # 博客文章目录
  │   └── 2020-05-30-hola.md
  ├── docs                          # 文档目录
  │   ├── doc1.md
  │   ├── doc2.md
  │   ├── doc3.md
  │   └── mdx.md
  ├── src                           # 页面或自定义的 React 组件目录
  │   ├── css
  │   │   └── custom.css
  │   └── pages
  │       ├── styles.module.css
  │       └── index.js
  ├── static                        # 静态文件目录
  │   └── img
  ├── i18n
  │   └── zh-Hans                   # 简体中文翻译位置
  │       ├── docusaurus-plugin-content-docs
  │       │   │── current
  │       │   │   ├── ...           # 要与 docs 目录结构相同的文件翻译
  │       │   │   └── doc1.md
  │       │   └── current.json      # 侧边栏
  │       ├── docusaurus-theme-classic
  │       │   └── navbar.json       # 导航栏
  │       ├── docusaurus-plugin-content-blog
  │       │   ├── ...               # 要与 blog 目录结构相同的文件翻译
  │       │   └── doc1.md
  │       └── code.json             # 定义了 React 代码中使用的所有文本标签
  ├── babel.config.js
  ├── docusaurus.config.ts          # 配置文件目录
  ├── package.json                  # 项目依赖管理
  ├── README.md                     # 项目解释 README
  ├── sidebars.ts                   # 文档侧边栏配置文件
  └── tsconfig.json
```

## 相关操作

```bash
# clone 项目
git clone https://github.com/RootCluster/Docs-Guides.git
# 安装依赖
cd docs-guides && yarn install

# 按需调整配置

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

## 配置调整

```ts
// 项目子路径
baseUrl: ''
```

## 路线图

- [x] 简单示例
- [x] 插件集成
  - [x] 图片预览
  - [x] 本地搜索
  - [x] 图表支持
- [ ] 打包脚本增强
- [ ] 分版
- [ ] 离线 PDF 生成

## 其他

- 搜索功能
  - 暂时先使用 [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
  - 等待 [issues-205](https://github.com/cmfcmf/docusaurus-search-local/issues/205)
- 离线PDF
  - [docusaurus-prince-pdf](https://github.com/signcl/docusaurus-prince-pdf)
