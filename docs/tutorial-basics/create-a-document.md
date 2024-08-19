---
sidebar_position: 2
title: Create a Docs
---

:::info

Create docs path(eg: 2024-06-06-docs.md): `docs/create-a-document.md`
> docs relevant articles must be placed under the docs directory.

:::

## Docs Header

```md
---
# 文档唯一 id
id: doc-markdown
# 文档标题
title: Docs Markdown Features
# 是否隐藏文档顶部的标题
hide_title: false
# 是否向右隐藏目录
hide_table_of_contents: false
# 文档侧边栏中显示的文本
sidebar_label: Markdown
# 使用自动生成的侧边栏项时，控制文档在生成的侧边栏切片中的位置
sidebar_position: 3
# 文档中使用的文本此文档的 下一个/上一个 按钮
pagination_label: Markdown features
# 编辑此文档的URL
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
# 您的文档的描述，它将成为<head>中的<meta name="description"content="…"/>和<meta properties="og： description"content="…"/>，供搜索引擎使用
description: How do I find you when I cannot solve this problem
# 用于搜索引擎优化的文档关键词元标签
keywords:
  - docs
  - docusaurus
# 要标记到文档的两个字符串字段 label 和 permalink 的字符串或对象列表
tags: [docusaurus]
# 将用作<head>中<meta properties="og： image"content="…"/>的封面或缩略图，增强社交媒体和消息传递平台上的链接预览
image: https://i.imgur.com/mErPwqL.png
# 文件路径
slug: /myDoc
# 最后更新
last_update:
  date: 1/1/2000
  author: custom author name
---

# Markdown Features

My Document Markdown content
```

更多信息 [Markdown front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)
