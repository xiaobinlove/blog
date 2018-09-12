module.exports = {
  title: 'docs',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/blog/', // 设置站点根路径
  repo: 'https://github.com/xiaobinlove/blogsite', // 添加 github 链接
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.jpg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'path/to/some/dir'
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'Javascript',
        items: [
          { text: 'es5', link: '/javascript/es5/' },
          { text: 'es6', link: '/javascript/es6/' },
        ]
      },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/javascript/es5/': genSidebarConfigES5('es5'),
      '/blog/': genSidebarConfigBlog('blog'),
    }
  }
}
function genSidebarConfigES5 (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'class1',
        'class2',
        'class3',
      ]

    }
  ]
}
function genSidebarConfigBlog (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'git',
        'class2',
        'class3',
        'code'
      ]
    }
  ]
}
