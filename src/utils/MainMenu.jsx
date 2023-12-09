import { store } from "~/store"
const states = store.getState()
export const mainMenu = [
    {
        path: "/",
        title: "Anasayfa",
        icon: <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path fill="currentColor" d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
        </svg>
    },
    {
        path: "/explore",
        title: "Keşfet",
        icon: <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path fill="currentColor" d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </svg>
    },
    {
        path: "/notifications",
        title: "Bildirimler",
        icon: <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path fill="currentColor" d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
        </svg>,
        notifications: 2
    },
    {
        path: "/messages",
        title: "Mesajlar",
        icon: <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path fill="currentColor" d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
        </svg>
    },
    {
        path: "/lists",
        title: "Listeler",
        icon: <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path fill="currentColor" d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path>
        </svg>
    },
    {
        path: "/verified-choose",
        title: "Premium",
        icon: <svg viewBox="0 0 24 24" width={30} height={30} >
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    },
    {
        path: `/@${states?.auth?.currentAccount?.username} `,
        title: "Profil",
        icon: <svg viewBox="0 0 24 24" width={30} height={30} >
            <path fill="currentColor" d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z" />
        </svg>
    },

]


export const topics = [
    {
        sort: 1,
        title: 'Siyaset Gundeminde',
        topic: {
            type: 'tag',
            value: "kemalKılıcdaroglu",
        },
        postCount: 31313
    },
    {
        sort: 2,
        title: 'Gundemdekiler',
        topic: {
            type: 'query',
            value: "bitcoin",
        },
        postCount: 1900

    },
    {
        sort: 3,
        title: 'Gundemdekiler',
        topic: {
            type: 'qurey',
            value: "kemalKılıcdaroglu",
        },
    },
    {
        sort: 4,
        title: 'Gundemdekiler',
        topic: {
            type: 'tag',
            value: "kabine toplantısı",
        },
        postCount: 5909
    },
    {
        sort: 5,
        title: 'Turkiye Futbol Gundeminde',
        topic: {
            type: 'tag',
            value: "Galatasaray",
        },
        postCount: 25909
    },

]

export const whoFollows = [
    {
        img: "https://pbs.twimg.com/profile_images/1677586701735145472/TBj4chbh_400x400.jpg",
        fullname: "Netflix Turkiye",
        username: "netflix"
    },
    {
        img: "https://pbs.twimg.com/profile_images/1724021532278575105/XIshv2DC_400x400.jpg",
        fullname: "Spotify Turkiye",
        username: "spotifyTR"
    },
    {
        img: "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
        fullname: "Tailwind CSS",
        username: "tailwindcss"
    },
]


export const renkler = [
    "#1d9bf0",
    "#ffd400",
    "#f91880",
    "#7856ff",
    "#ff7a00",
    "#00ba7c",
]

export const fonstSizes = [
    14,
    15,
    16,
    18,
    19
]






export const posts = [
    {
        id: '1358632465282150796',
        type: 'poll',
        content: `Bir sonraki proje Trendyol Clone Olsun mu?`,
        poll: {
            voted: false,
            votes: 51,
            answers: [
                {
                    id: 1,
                    text: 'Evet',
                    votes: 40
                },
                {
                    id: 2,
                    text: 'Hayır',
                    votes: 5
                },
                {
                    id: 3,
                    text: 'Getir Clone',
                    votes: 6
                }
            ]
        },
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1516084427557945358/IeY7soqo_400x400.jpg',
            username: 'omerulusal',
            fullName: 'Ömer Ulusal'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '1704632465282150796',
        type: 'photo',
        content: `Samsara is out tomorrow, as part of my debut album Genesys`,
        photos: [
            'https://pbs.twimg.com/media/F3LiVMOXcAA8kop?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1397577429145817088/n9BzvNmY_400x400.jpg',
            username: 'TaleOfUs',
            fullName: 'Tale Of Us'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '1708632465281150796',
        type: 'photo',
        content: `Imagination Land!`,
        photos: [
            'https://pbs.twimg.com/media/F7ZIK8KWgAAP8pH?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/FTv8kQ-WAAEITXN?format=jpg&name=medium'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
            username: 'elonmusk',
            fullName: 'Elon Musk',
            verified: true
        },
        stats: {
            comments: 6573535,
            repost: 343434,
            like: 366946,
            view: 23453453
        }
    },
    {
        id: '1708704613141270652',
        content: `Less than a week since OpenAI started rolling out ChatGPT vision. And people have been busy executing god-like tasks.35 truly mind-boggling examples:(29th is my )`,
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1696215555148046336/xCMn27ZY_400x400.jpg',
            username: 'sairahul1',
            fullName: 'Sai Rahul',
            verified: true
        },
        stats: {
            comments: 25,
            repost: 12,
            like: 99,
            view: 2341
        }
    },
    {
        id: '1708810187170087410',
        type: 'photo',
        content: `İstanbul'da Cumhuriyet'in 100. yılına özel, 100 gün boyunca Yerebatan Sarnıcı, Şerefiye Sarnıcı, Miniatürk ve Panorama 1453 Tarih Müzesi ücretsiz ziyaret edilebilecek.`,
        photos: [
            'https://pbs.twimg.com/media/F7bpqaKXkAAopDd?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F7bptMoXYAA7TpB?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/FdLgFCWWQAA0EUt?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1707827931895017472/1-bUbTT3_400x400.jpg',
            username: 'Darkwebhaber',
            fullName: 'DarkWeb Haber'
        },
        stats: {
            comments: 234234,
            repost: 2324,
            like: 1134124,
            view: 111144
        }
    },
    {
        id: '1708707876628476134',
        type: 'photo',
        content: `It's PortfolioDay I'm Ashley, I'm an Advanced Lighting Artist at @RocksteadyGames
        specialising in cinematic and environment lighting. Who's excited for SuicideSquadGame?`,
        photos: [
            'https://pbs.twimg.com/media/FmIboYuXEAUA5ve?format=jpg&name=large',
            'https://pbs.twimg.com/media/FmIbosQXwAADp_Z?format=jpg&name=large',
            'https://pbs.twimg.com/media/FmIbo9OXkAAE4s1?format=jpg&name=large',
            'https://pbs.twimg.com/media/FmIbpOeXwAAaSVD?format=jpg&name=large',
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1645885507753082881/I7W9YoP-_400x400.jpg',
            username: 'NOISECHECK',
            fullName: 'Ashley',
            verified: true
        },
        stats: {
            comments: 99999,
            repost: 999999,
            like: 999999,
            view: 99999999
        }
    }
]