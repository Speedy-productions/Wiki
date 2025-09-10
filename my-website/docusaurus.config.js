module.exports = {
  title: 'Speedy Production Wiki',
  tagline: 'Documentación para nuestro videojuego',
  url: 'https://speedyproductions.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', 
  projectName: 'your-repo',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Speedy Production Wiki',
      items: [
        {
          label: 'Docs',
          to: '/',
          position: 'left',
        },
        {
          href: 'https://github.com/Speedy-productions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};
