import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DFreds Modules',
  tagline: 'Documentation for DFreds Modules',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dfreds-modules.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/DFreds/dfreds-module-docs/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'status-effects-supporters',
    //   content: 'Status Effects is now available for Supporters!',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091e42',
    //   isCloseable: true,
    // },
    image: 'img/dfreds-social-card.jpg',
    algolia: {
      appId: 'V92TN6YDYA',
      apiKey: 'fea86a831910e81825da696f080e88c9',
      indexName: 'dfreds-module-vercel',
      replaceSearchResultPathname: {
        from: '/docs/',
        to: '/',
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DFreds Modules',
      logo: {
        alt: 'DFreds Modules Logo',
        src: 'img/dfreds-logo.svg',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://www.patreon.com/dfreds',
          position: 'right',
          className: 'patreon-button',
          ariaLabel: 'Patreon',
        },
        {
          href: 'https://discord.gg/Wq8AEV9bWb',
          position: 'right',
          className: 'discord-button',
          ariaLabel: 'Discord',
        },
        {
          href: 'https://github.com/DFreds',
          position: 'right',
          className: 'github-button',
          ariaLabel: 'GitHub',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} DFreds Modules.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
