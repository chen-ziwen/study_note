module.exports = {
    title: 'chiko学习笔记', // 左上角标题
    markdown: {
        // 代码块行号
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        //导航栏链接
        nav: require('./nav.js'),
        // 侧边栏
        sidebar: require('./sidebar.js'),
        // 启用页面滚动效果
        smoothScroll: true,
        // 最后更新时间
        lastUpdated: 'Last Updated',
        sidebarDepth: 2,
        repo: 'https://github.com/chen-ziwen',
        repoLabel: 'github',
    },
    base: '/study_note/',
    description: 'Just playing around',
}