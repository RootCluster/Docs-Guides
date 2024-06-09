---
sidebar_position: 1
title: 创建 Pages
---

:::info
创建 pages 文章路径(如:这里的 2024-06-06-docs.md): `src/pages/markdown-page.md`
> pages 相关文章必须放在 `src/pages` 目录下
:::

## React Page

在 `src/pages/` 创建文件 `my-react-page.js`

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

## Markdown Page

在 `src/pages/` 创建文件 `my-markdown-page.md`

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```
