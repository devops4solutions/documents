/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Devops4Solutions',
  tagline: 'Solutions and Insights for DevOps Professionals',
  url: 'https://devops4solutions.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'devops4solutions', 
  projectName: 'documents', 

  themeConfig: {
    navbar: {
      title: 'Devops4Solutions',
      logo: {
        alt: 'Devops4Solutions Logo',
        src: 'img/logo.png', // Add your logo in /static/img/
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/about', label: 'About Us', position: 'left' },
        { to: '/docs/intro', label: 'Case Studies', position: 'left' }, // you can put your case studies in docs
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact Us', position: 'left' },
        {
          href: 'https://github.com/devops4solutions/documents',
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
            { label: 'Contact', to: '/contact' },
            { label: 'Case Studies', to: '/docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/devops4solutions/documents' },
            { label: 'LinkedIn', href: 'https://linkedin.com/company/devops4solutions' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Devops4Solutions`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs', // folder where your docs/case studies live
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          editUrl:
            'https://github.com/devops4solutions/documents/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Devops4Solutions Blog',
          blogDescription: 'Tips, insights, and case studies in DevOps',
          editUrl:
            'https://github.com/devops4solutions/documents/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // Custom pages for homepage, about, contact
  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/',
      },
    ],
  ],
};
