/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Devops4Solutions Documentation',
  tagline: 'Documentation provided by Devops4solutions',
  url: 'https://devops4solutions.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devops4solutions',
  projectName: 'documents', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DevOps Documentation',

    },
   
   
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://devops4solutions.github.io/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://devops4solutions.github.io/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

