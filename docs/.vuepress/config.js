module.exports = {
  title: 'docs',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/blog/', // 设置站点根路径
  repo: 'https://github.com/xiaobinlove/blogsite', // 添加 github 链接
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'Javascript',
        items: [
          { text: 'es5', link: '/javascript/es5/' },
          { text: 'es6', link: '/javascript/es6/' }
        ]
      },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/javascript/es5/': genSidebarConfigES5('es5'),
      '/blog/': genSidebarConfigBlog('es5'),
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
        'class3'
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
        'class1',
        'class2',
        'class3'
      ]
    }
  ]
}
