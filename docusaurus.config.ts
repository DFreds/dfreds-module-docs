import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DFreds Modules',
  tagline: 'Documentation for DFreds Modules',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DFreds', // Usually your GitHub org/user name.
  projectName: 'dfreds-module-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/DFreds/dfreds-module-docs/tree/main',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/DFreds/dfreds-module-docs/tree/main',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/dfreds-social-card.jpg',
    navbar: {
      title: 'DFreds Modules',
      logo: {
        alt: 'DFreds Modules Logo',
        src: 'img/dfreds-logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'modulesSidebar',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          label: 'Patreon',
          href: 'https://www.patreon.com/dfreds',
          position: 'right',
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/Wq8AEV9bWb',
          position: 'right',
        },
        {
          href: 'https://github.com/DFreds',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Premium Modules',
      //         to: '/docs/category/premium-modules',
      //       },
      //       {
      //         label: 'Free Modules',
      //         to: '/docs/category/free-modules',
      //       },
      //       {
      //         label: 'Developers',
      //         to: '/docs/category/developers',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Patreon',
      //         href: 'https://www.patreon.com/dfreds',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discord.gg/Wq8AEV9bWb',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       // {
      //       //   label: 'Blog',
      //       //   to: '/blog',
      //       // },
      //       {
      //         label: 'Public Modules on GitHub',
      //         href: 'https://github.com/topics/dfreds-modules',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} DFreds.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
