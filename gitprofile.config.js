// gitprofile.config.js

const config = {
  github: {
    username: 'brunokreiner', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["brunokreiner.github.io"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kreinbru',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://brunokreiner.github.io',
    phone: '',
    email: 'brunokreiner@hotmail.ch',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ql-SKNCUIsfc5DE3_iBtAacsocMtTQVo/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'PyTorch',
    'Pandas',
    'Numpy',
    'Selenium',
    'Git',
    'Apache Kafka',
    'CSS',
  ],
  experiences: [
    {
      company: 'University of Applied Sciences Northwestern Switzerland',
      position: 'Student Assistant',
      from: 'Sep 2021',
      to: 'Dec 2021',
      companyLink: '',
    },
    {
      company: 'Wunderman Thompson (formerly Y&R Group Switzerland',
      position: 'Software Development Apprentrieship',
      from: 'Jul 2015',
      to: 'Aug 2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Trainer C',
      body: 'Table Tennis Trainer Certificate from J+S',
      year: 'Aug 2022',
      link: 'https://www.jugendundsport.ch/de/sportarten/tischtennis-uebersicht.html'
    },
  ],
  education: [
    {
      institution: 'University of Applied Sciences Northwestern Switzerland',
      degree: 'BSc Data Science',
      from: 'Feb 2021',
      to: 'Jul 2023 (Continuation)',
    },
    {
      institution: 'Zurich University of Applied Sciences',
      degree: 'BSc Engineering and Management',
      from: 'Sep 2019',
      to: 'Feb 2021 (Basics)',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'brunokreiner', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3286522',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
