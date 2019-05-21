module.exports = {
  title: 'Ecom',
  description: 'Documentation and getting started guides for Ecom CLI Tool and JS Client Library.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CLI Tool', link: '/cli-tool/' },
      { text: 'JS Client Library', link: '/jsclient/' },
    ],
    sidebarDepth: 3,
    sidebar: [{
        title: 'CLI Tool',
        collapsable: false,
        children: [
            '/cli-tool/installation',
            '/cli-tool/getting-started',
            '/cli-tool/commands',
            '/cli-tool/yaml-file-formats',
            '/cli-tool/shop-repositories'
      ]
    }],
    lastUpdated: 'Last Updated'
  }
}
