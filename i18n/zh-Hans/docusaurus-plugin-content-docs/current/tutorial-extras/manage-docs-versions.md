---
sidebar_position: 1
title: 版本管理
---

Docusaurus 可以管理文档的多个版本.

## 创建版本

发布项目的 1.0 版本

```bash npm2yarn
# 将 `docs` 文件夹复制到 `versioned_docs/version-1.0` 并创建 `versions.json`
npm run docusaurus docs:version 1.0
```

你的 docs 现在有 2 个版本:

- `1.0`: `http://localhost:3000/docs/` 对于版本 1.0 docs
- `current`: `http://localhost:3000/docs/next/` 对于 **即将发布的未发布 docs**

## 添加版本下拉

为了夸版本无缝导航，要添加一个版本下来列表

修改 `docusaurus.config.js` 文件:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

docs 版本下拉列表出现在导航栏中:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 更新现有版本

可以在各自的文件夹中编辑版本化的 docs:

- 1.0: `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- 当前版本: `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
