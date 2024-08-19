import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Book",
  tagline: "Book Demo",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docusaurus.incoder.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RootCluster", // Usually your GitHub org/user name.
  projectName: "Docs-Guides", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    "@docusaurus/theme-mermaid",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          showLastUpdateTime: true,
        },
        blog: {
          // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // giscus 评论功能
    giscus: {
      repo: "RootCluster/Docs-Guides",
      repoId: "R_kgDOMD4R8A",
      category: "General",
      categoryId: "DIC_kwDOMD4R8M4CgGSs",
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Book",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
        href: "/",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   dropdownActiveClassDisabled: true,
        // },
        // language change
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/RootCluster/Docs-Guides",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Docs Guides, Inc. Built with Docusaurus.`,
    },

    // announcementBar: {
    //   id: `announcementBar-v1`,
    //   // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
    //   content: `🎉️ <b><a target="_blank" ">Docusaurus </a> is out!</b> 🥳️`,
    // },
    prism: {
      additionalLanguages: ["java", "bash", "diff", "json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
