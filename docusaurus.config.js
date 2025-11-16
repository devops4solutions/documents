/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DevOps4Solutions',
  tagline: 'Your DevOps Documentation & Case Studies',
  url: 'https://devops4solutions.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devops4solutions', 
  projectName: 'documents',

  themeConfig: {
    navbar: {
      title: 'DevOps4Solutions',
      logo: {
        alt: 'DevOps Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/case-studies', label: 'Case Studies', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        { to: '/docs/introduction', label: 'Docs', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Case Studies', to: '/case-studies' },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/introduction' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/devops4solutions/documents' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DevOps4Solutions.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/devops4solutions/documents/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/devops4solutions/documents/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {},
      },
    ],
  ],
};
