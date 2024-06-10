---
sidebar_position: 3
title: 创建 Blog
---

:::info
创建 blog 文章路径(如:这里的 2024-06-06-docs.md): `blog/2024-06-06-docs.md`
> blog 相关文章必须放在 `blog` 目录下
:::

## 普通配置

```md title="blog/2024-06-06-docs.md"
---
# 文件路径
slug: hello-docs-guides
# blog 文章标题
title: Docs-Guides
# blog 的作者
authors:
  - name: Jerry Xu
    title: Docusaurus Demo
    url: https://incoder.org
    image_url: https://avatars.githubusercontent.com/u/12027865?v=4
# blog 标签，如需要多个中间使用 , 分割
tags: [hello]
---

使用 [Docusaurus 3.4.0](https://github.com/facebook/docusaurus/releases/tag/v3.4.0) 版本构建整合示例项目

# 用于在 blog 页面预览上面的内容，下面的内容需要在 blog 详情页展示
<!--truncate-->

示例项目已集成整合如下功能：

- 支持夜间模式
- 支持多语言
- 支持本地搜索
- 支持图表
- 支持图片放大

```

## 重复配置

对于 Blog 中重复的作者，可以抽取一个文件，其他 Blog 文章进行引用即可

### 1. 抽取 `authors.yml` 文件

```yml
# highlight-next-line
xu:
  name: Jerry Xu
  title: Developer
  url: https://incoder.org
  image_url: https://github.com/endiliey.png
```

### 2. blog 文章引用

blog 文章开头定义中进行引用

```md
---
slug: mdx-blog-post
title: MDX Blog Post
# 这里引用 authors.yml 文件中定义的作者
# highlight-next-line
authors: [xu]
tags: [docusaurus]
---
```
