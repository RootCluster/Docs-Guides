---
sidebar_position: 3
title: Create a Blog
---

:::info
Create blog path(eg: 2024-06-06-docs.md): `blog/2024-06-06-docs.md`
> blog relevant articles must be placed under the `blog` directory.
:::

## General config

```md title="blog/2024-06-06-docs.md"
---
# file path
slug: hello-docs-guides
# blog title
title: Docs-Guides
# blog authors
authors:
  - name: Jerry Xu
    title: Docusaurus Demo
    url: https://incoder.org
    image_url: https://avatars.githubusercontent.com/u/12027865?v=4
# blog tags, if multiple intermediate uses are needed, split
tags: [hello]
---

Use [Docusaurus 3.4.0](https://github.com/facebook/docusaurus/releases/tag/v3.4.0) version build example project

# Used to preview the content above on the blog page, which needs to be displayed on the blog details page
<!--truncate-->

The sample project has integrated the following functions:

- Support night mode
- Support multiple languages
- Support local search
- Supporting charts
- Support picture zoom

```

## Duplicate config

For duplicate authors in the blog, you can extract a file and refer to other blog articles.

### 1. Extract `authors.yml` file

```yml
# highlight-next-line
xu:
  name: Jerry Xu
  title: Developer
  url: https://incoder.org
  image_url: https://github.com/endiliey.png
```

### 2. blog article citation

blog reference in the definition at the beginning of the article

```md
---
slug: mdx-blog-post
title: MDX Blog Post
# Here we refer to the author defined in the authors.yml file
# highlight-next-line
authors: [xu]
tags: [docusaurus]
---
```
