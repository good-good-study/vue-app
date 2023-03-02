// 菜单model
export interface Menu {
    name: string,
    children: Menu[]
}

export const menus: Menu[] = [
    // {
    //     name: 'A', children: [
    //         {
    //             name: 'A1',
    //             children: [
    //                 {
    //                     name: 'A1-1',
    //                     children: [
    //                         {
    //                             name: 'A1-1-1', children: [
    //                                 {
    //                                     name: 'A1-1-1-1',
    //                                     children: [
    //                                         { name: 'A1-1-1-1-1', children: [] },
    //                                         { name: 'A1-1-1-1-2', children: [] },
    //                                     ]
    //                                 },]
    //                         },
    //                         { name: 'A1-1-2', children: [] },
    //                     ]
    //                 },
    //                 {
    //                     name: 'A1-2',
    //                     children: [
    //                     ]
    //                 },
    //             ]
    //         },
    //         { name: 'A2', children: [] },
    //         { name: 'A3', children: [] },
    //     ]
    // },
    {
        name: '开始',
        children: [
            {
                name: '简介',
                children: [
                    { name: '什么是Vue?', children: [] },
                    { name: '渐进式框架', children: [] },
                    { name: '单文件组件', children: [] },
                    {
                        name: 'API风格',
                        children: [
                            { name: '选项式 API (Options API)', children: [] },
                            { name: '组合式 API (Composition API)', children: [] },
                        ]
                    },
                ]
            },
            { name: '快速上手', children: [] },
        ]
    },
    {
        name: '基础',
        children: [
            { name: '创建一个 Vue 应用', children: [] },
            { name: '模板语法', children: [] },
            { name: '响应式基础', children: [] },
            { name: '计算属性', children: [] },
            { name: 'Class 与 Style 绑定', children: [] },
            { name: '条件渲染', children: [] },
            { name: '列表渲染', children: [] },
            { name: '事件处理', children: [] },
            { name: '表单输入绑定', children: [] },
            { name: '生命周期钩子', children: [] },
            { name: '侦听器', children: [] },
            { name: '模板引用', children: [] },
            { name: '组件基础', children: [] },
        ]
    },
    {
        name: '深入组件',
        children: [
            {
                name: '注册',
                children: [
                    { name: '全局注册', children: [] },
                    { name: '局部注册', children: [] },
                    { name: '组件名格式', children: [] },
                ]
            },
            { name: 'Props', children: [] },
            { name: '事件', children: [] },
            { name: '组件 v-model', children: [] },
            { name: '透传 Attriutes', children: [] },
            { name: '插槽', children: [] },
            { name: '依赖注入', children: [] },
            { name: '异步组件', children: [] },
        ]
    },
    {
        name: '逻辑复用', children: [
            { name: '组合式函数', children: [] },
            { name: '自定义指令', children: [] },
            { name: '插件', children: [] },
        ]
    },
    {
        name: '内置组件',
        children: [
            { name: 'Transition', children: [] },
            { name: 'TransitionGroup', children: [] },
            { name: 'KeepAlive', children: [] },
            { name: 'Teleport', children: [] },
            { name: 'Suspense', children: [] },
        ]
    },
    {
        name: '应用规模化',
        children: [
            { name: '单文件组件', children: [] },
            { name: '工具链', children: [] },
            { name: '路由', children: [] },
            { name: '状态管理', children: [] },
            { name: '测试', children: [] },
            { name: '服务端渲染 (SSR)', children: [] },
        ]
    },
    { name: '最佳实践', children: [] },
    { name: 'TypeScript', children: [] },
    { name: '进阶主题', children: [] },
]