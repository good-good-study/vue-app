// 排行榜 Model定义
export interface Rank {
    name: string,
    invite: number
    avatar?: string
}

// 每日数据
export const rankDays: Rank[] = [
    {
        name: '十二',
        invite: 1100,
        avatar: 'https://img0.baidu.com/it/u=2471782814,2803852372&fm=253&fmt=auto&app=120&f=JPEG?w=660&h=373'
    },
    {
        name: '用户264158348713',
        invite: 594,
        avatar: 'https://img1.baidu.com/it/u=1193701826,327254390&fm=253&fmt=auto&app=138&f=PNG?w=890&h=500'
    },
    {
        name: '用户73313664057',
        invite: 507,
        avatar: 'https://img2.baidu.com/it/u=5336996,606424164&fm=253&fmt=auto&app=120&f=PNG?w=640&h=360'
    },
    {
        name: '微信用户1260913649',
        invite: 402,
        avatar: 'https://img1.baidu.com/it/u=484287790,3142432942&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=393'
    },
    {
        name: '.跑得快',
        invite: 248,
        avatar: 'https://img1.baidu.com/it/u=1438730829,413990156&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360'
    },
    {
        name: 'Mr.Fu',
        invite: 160,
        avatar: 'https://img0.baidu.com/it/u=3786993962,2628540401&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500'
    },
    {
        name: '5855',
        invite: 102,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '用户471006659809',
        invite: 752,
        avatar: 'https://img1.baidu.com/it/u=470535675,1706480224&fm=253&fmt=auto&app=138&f=JPEG?w=835&h=500'
    },
    {
        name: '微信用户',
        invite: 42,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '抽象的生活',
        invite: 10,
        avatar: 'https://img2.baidu.com/it/u=4052004108,963780797&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360'
    },
    {
        name: '温柔的晚安',
        invite: 10,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '相见不如怀念ゝ',
        invite: 10,
        avatar: 'https://img2.baidu.com/it/u=4052004108,963780797&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360'
    },
    {
        name: '我明白要你爱是荒谬的※',
        invite: 10,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '似乎，世界一切都不属于我',
        invite: 10,
        avatar: 'https://img2.baidu.com/it/u=4052004108,963780797&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360'
    },
]

// 每周数据
export const rankWeeks: Rank[] = [
    {
        name: '十二',
        invite: 1100 * 2,
        avatar: 'https://img0.baidu.com/it/u=1405034453,4094362351&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500'
    },
    {
        name: '用户264158348713',
        invite: 594 * 2,
        avatar: 'https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF'
    },
    {
        name: '用户73313664057',
        invite: 507 * 2,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '微信用户1260913649',
        invite: 402 * 2,
        avatar: 'https://img0.baidu.com/it/u=3095049749,2091456515&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360'
    },
    {
        name: '.跑得快',
        invite: 248 * 2,
        avatar: 'https://img1.baidu.com/it/u=3234981695,3200732852&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=369'
    },
    {
        name: 'Mr.Fu',
        invite: 160 * 2,
        avatar: 'https://img1.baidu.com/it/u=896199323,3282611261&fm=253&fmt=auto&app=138&f=PNG?w=854&h=500'
    },
    {
        name: '5855',
        invite: 102 * 2,
        avatar: 'https://img2.baidu.com/it/u=587119116,2891160269&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=319'
    },
    {
        name: '用户471006659809',
        invite: 752 * 2,
        avatar: 'https://img2.baidu.com/it/u=1802810972,3714058367&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=359'
    },
    {
        name: '微信用户',
        invite: 42 * 2,
        avatar: 'https://img0.baidu.com/it/u=3234952589,2683969645&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=270'
    },
    {
        name: '抽象的生活',
        invite: 10 * 2,
        avatar: 'https://img0.baidu.com/it/u=4290786040,3362678440&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=402'
    },
    {
        name: '芐雨孒，莪茬適里！ | 芐雨孒，沵茬哪里？',
        invite: 10 * 2,
        avatar: 'https://img0.baidu.com/it/u=3701259725,2605454332&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
    },
    {
        name: '-心间环绕悲伤、无人触及',
        invite: 10 * 2,
        avatar: 'https://img0.baidu.com/it/u=3095049749,2091456515&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360'
    },
    {
        name: '温柔∝乡',
        invite: 10 * 2,
        avatar: 'https://img2.baidu.com/it/u=5336996,606424164&fm=253&fmt=auto&app=120&f=PNG?w=640&h=360'
    },
    {
        name: '谁也卜是谁の谁',
        invite: 10 * 2,
        avatar: 'https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF'
    },
    {
        name: '-我说我要陪你很久很久- | -你说你要陪我天长地久-',
        invite: 10 * 2,
        avatar: 'https://img0.baidu.com/it/u=2471782814,2803852372&fm=253&fmt=auto&app=120&f=JPEG?w=660&h=373'
    },
]