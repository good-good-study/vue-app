// 菜单model
export interface Menu {
    name: string,
    children: Menu[]
}

export const menus: Menu[] = [
    {
        name: 'A', children: [
            {
                name: 'A1',
                children: [
                    {
                        name: 'A1-1',
                        children: [
                            {
                                name: 'A1-1-1', children: [
                                    {
                                        name: 'A1-1-1-1',
                                        children: [
                                            { name: 'A1-1-1-1-1', children: [] },
                                            { name: 'A1-1-1-1-2', children: [] },
                                        ]
                                    },]
                            },
                            { name: 'A1-1-2', children: [] },
                        ]
                    },
                    {
                        name: 'A1-2',
                        children: [
                        ]
                    },
                ]
            },
            { name: 'A2', children: [] },
            { name: 'A3', children: [] },
        ]
    },
    {
        name: 'B', children: [
            {
                name: 'B1', children: [
                    { name: 'B1-1', children: [] },
                    { name: 'B1-2', children: [] },
                ]
            },
            { name: 'B2', children: [] },
            { name: 'B3', children: [] },
        ]
    },
    { name: 'C', children: [] },
    { name: 'D', children: [] },
    { name: 'E', children: [] },
    { name: 'F', children: [] },
    { name: 'G', children: [] },
]