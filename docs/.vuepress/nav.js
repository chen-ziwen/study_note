const nav = [
    {
        text: '前端知识', items: [
            {
                text: '基础', items: [
                    { text: 'HTML&CSS', link: '/notes/h5' },
                    { text: 'JavaScript', link: '/notes/js' },
                    { text: 'TypeScript', link: '/notes/ts' },
                    { text: 'Sass', link: '/notes/sass' },
                ]
            },
            {
                text: '框架', items: [
                    { text: 'Vue', link: '/notes/vue/vue2_base' },
                    { text: 'React', link: '/notes/react' },
                ]
            },
            {
                text: '工具', items: [
                    { text: 'Git', link: '/notes/git' },
                    { text: 'Nodejs', link: '/notes/nodejs' },
                ]
            },
        ],
    },
    { text: '问题解决', link: '/guide/' },
]

module.exports = nav;