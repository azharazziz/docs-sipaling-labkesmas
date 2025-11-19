// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portal Labkesmas Magelang',
  tagline: 'Akurat, Responsif, dan Berkelanjutan',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'azharazziz', // Usually your GitHub org/user name.
  projectName: 'portal-labkesmas', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Portal Labkesmas Magelang',
        logo: {
          alt: 'Portal Labkesmas Magelang Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/azharazziz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Navigasi',
            items: [
              {
                label: 'Dokumentasi',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Layanan',
            items: [
              {
                label: 'Layanan Internal',
                to: '/docs/features/internal',
              },
              {
                label: 'Layanan Pelanggan',
                to: '/docs/features/external',
              },
              {
                label: 'Spesifikasi Sistem',
                to: '/docs/specification',
              },
            ],
          },
          {
            title: 'Kontak',
            items: [
              {
                label: 'Email',
                href: 'mailto:azharazziz13@gmail.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/azharazziz',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/azharazziz',
              },
            ],
          },
        ],
        copyright: `<div style="text-align: center;">
          <p style="margin: 0.5rem 0;">© ${new Date().getFullYear()} Portal Labkesmas Magelang. Semua hak dilindungi.</p>
          <p style="margin: 0.5rem 0; font-size: 0.9rem; opacity: 0.7;">Dibangun dengan teknologi modern untuk layanan kesehatan yang lebih baik.</p>
        </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
