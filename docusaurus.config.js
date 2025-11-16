/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DevOps4Solutions',
  tagline: 'Your trusted DevOps and Cloud solutions partner',
  url: 'https://devops4solutions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devops4solutions', // GitHub org/user
  projectName: 'website', // repo name

  themeConfig: {
    navbar: {
      title: 'DevOps4Solutions',
      logo: {
        alt: 'DevOps4Solutions Logo',
        src: 'img/logo.svg', // Add your logo
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/about', label: 'About Us', position: 'left' },
        { to: '/case-studies', label: 'Case Studies', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact Us', position: 'left' },
        {
          href: 'https://github.com/devops4solutions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            { label: 'About Us', to: '/about' },
            { label: 'Case Studies', to: '/case-studies' },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/devops4solutions' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DevOps4Solutions`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          editUrl:
            'https://github.com/devops4solutions/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/devops4solutions/website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // Optional plugins (avoid conflicts with default content pages)
  plugins: [
    // You can add analytics, sitemap, or custom plugins here
  ],
};
