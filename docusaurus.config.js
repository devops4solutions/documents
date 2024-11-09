/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Devops4Solutions Documentation',
  tagline: 'Documentation provided by Devops4solutions',
  url: 'https://devops4solutions.github.io',
  baseUrl: '/website1/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devops4solutions',
  projectName: 'website1', // Usually your repo name.
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
      },
    ],
  ],
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

