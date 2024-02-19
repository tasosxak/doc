

export default {
  // app level config options
  lang: 'en-US',
  title: '🍕 Systems',
  description: 'Vite & Vue powered static site generator.',
  head: [
    ['link', { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css' }],
   // ['script', {src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js'}],
    ['script', {src: 'https://cdn.jsdelivr.net/npm/apexcharts'}]
],
  srcDir: 'src',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Config', link: '/config' },
      { text: 'Changelog', link: 'https://github.com/...' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com" },
      { icon: "twitter", link: "https://twitter.com" },
      { icon: "discord", link: "..." },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting_started' },  
          { text: 'About', link: '/about' },
        ]
      }
    ]
  },
  
}