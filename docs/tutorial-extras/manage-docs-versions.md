---
sidebar_position: 1
title: Version Manage
---

Docusaurus can manage multiple versions of documents.

## Create Version

Release version 1.0 of the project

```bash npm2yarn
# 将 `docs` 文件夹复制到 `versioned_docs/version-1.0` 并创建 `versions.json`
npm run docusaurus docs:version 1.0
```

Your docs now has 2 versions.:

- `1.0`: `http://localhost:3000/docs/` For version 1.0 docs
- `current`: `http://localhost:3000/docs/next/` For **upcoming unreleased docs**

## Add version drop down

To kua version seamless navigation, add a version down to the list

Modify `docusaurus.config.js` file:

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

docs version drop-down list appears in the navigation bar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update existing version

You can edit the versioned docs in their respective folders:

- 1.0: `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- current version: `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
