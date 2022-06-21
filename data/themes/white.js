export const white = {
  label: 'white',
  space: {
    x: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  fonts: {
    body: 'Euclid',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [11, 13, 15, 18, 21, 24, 48],
  fontWeights: {
    bold: 900,
    heading: 600,
    medium: 500,
    regular: 400,
    caption: 300,
    light: 100,
  },
  lineHeights: ['280%'],
  letterSpacings: [
    '3.9px',
    '5.9px',
    '7.9px',
    '11.9px',
    '15.9px',
    '33.9px',
    '49.9px',
    '55.9px',
  ],
  colors: {
    primary: 'hsla(208.23529411764707, 100%, 50%, 1)',
    secondary: 'green',
    text: 'hsla(82.08955223880601, 6.592762351436339%, 13.284203999999999%, 1)',
    text2: '#4E3E9F',
    background: 'hsla(0, 0%, 100%, 1)',
    card: 'white',
    borderColor: 'hsla(82.37288135593235, 5.887335874629394%, 42.809652%, 1)',
  },
  borders: { border: '0px solid borderColor' },
  radii: ['5px', '10px', '20px', '30px', '40px', '60px', '120px'],
  shadows: {
    '0': '0 0px 0px rgba(0,0,0,0.12),',
    '1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    default: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  atoms: {
    text: {},
    card: {
      bg: 'card',
      border: 'border',
      borderColor: 'borderColor',
      boxShadow: 'default',
      height: 'auto',
      borderRadius: 5,
    },
    label: { color: 'primary', fontWeight: 'regular', fontSize: 1 },
    heading: {
      fontSize: 4,
      h1: { color: 'text', lineHeight: '2.25rem', fontSize: '1.875rem' },
      h2: { color: 'text', lineHeight: 'normal', fontSize: 4 },
      h3: { color: 'text', lineHeight: 'normal', fontSize: 3 },
      h4: {
        color: 'text',
        // fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 2,
      },
    },
    paragraph: { color: 'text2', fontSize: 2, fontWeight: 'regular' },
    image: { borderRadius: 4 },
    name: {},
    caption: { color: 'text2', fontSize: 1, fontWeight: 'regular' },
    avatar: {},
    button: {
      height: 40,
      borderRadius: 1,
      borderWidth: 0,
      pl: 16,
      pr: 16,
      mt: 16,
    },
    input: {
      height: 40,
      color: 'hsla(250, 0%, 0%, 1)',
      borderRadius: 1,
      background: 'hsla(250, 0%, 96.86274509803921%, 1)',
      borderColor: 'hsla(250, 0%, 90.19607843137256%, 1)',
    },
    usercard: {},
    field: {},
    actions: {},
    background: {},
    container: { pr: 98, width: 670 },
    separator: {},
  },
  molecules: {
    blogpost: {
      card: { variant: 'atoms.card', override: false },
      image: { variant: 'atoms.image', override: false, order: 1 },
      label: { variant: 'atoms.label', override: false, order: 2 },
      heading: { variant: 'atoms.heading.h2', override: false, order: 3 },
      paragraph: { variant: 'atoms.paragraph', override: false, order: 4 },
      usercard: {
        variant: 'atoms.usercard',
        override: false,
        order: 5,
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
      props: {
        title: 'Generative logo design',
        href: '#',
        label: 'Case Study',
        description:
          'Our instincts were to start with a simple form that could become more complex and technical over time as the project matures and grows. Eventually, the logo design could be informed or driven by data we’ve collected.',
        imageUrl: 'http://dc28c2r6oodom.cloudfront.net/notes/dice-lines.jpg',
        authorName: 'Elliot Jay Stocks',
        authorAvatar: '/img/avatar/elliot-jay-stocks.jpeg',
        caption: 'Feb 12, 2022  ·  11 min read',
      },
    },
    form: {
      heading: { variant: 'atoms.heading.h1' },
      card: {
        variant: 'atoms.card',
        override: true,
        boxShadow: 'none',
        width: 400,
        pb: 12,
      },
      input: { variant: 'atoms.input', override: false },
      button: { variant: 'atoms.button', override: false },
      label: { override: true, unique: true },
      caption: { override: true, unique: true },
      field: {
        variant: 'atoms.field',
        override: true,
        input: { variant: 'atoms.input', override: false, unique: true },
        label: { override: true, unique: true },
        caption: { override: true, unique: true },
        mt: 16,
        mb: 0,
      },
    },
    feeditem: {
      card: {
        variant: 'atoms.card',
        override: false,
        width: 528,
        ml: 24,
        mr: 24,
        pt: 8,
      },
      avatar: {
        variant: 'atoms.avatar',
        override: false,
        width: 48,
        height: 48,
        minWidth: 48,
        minHeight: 48,
        mr: 21,
      },
      name: {
        variant: 'atoms.name',
        override: true,
        display: 'block',
        fontSize: '17px',
      },
      username: {
        variant: 'atoms.username',
        override: true,
        fontSize: '17px',
        fontWeight: 200,
        color: 'hsla(249.99999999999991, 0%, 0%, 0.61)',
      },
      date: {
        variant: 'atoms.date',
        override: true,
        display: 'block',
        color: 'hsla(0, 0%, 0%, 0.5)',
        fontSize: '17px',
      },
      title: { variant: 'atoms.title', override: false },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
        mr: 8,
        color: 'hsla(250.000000000001, 1.8433649047764529%, 27.817227%, 1)',
        mt: 4,
      },
      heading: {
        variant: 'atoms.heading.h3',
        override: false,
        h3: { variant: 'atoms.heading.h3', override: false },
      },
      actions: {
        variant: 'atoms.actions',
        override: true,
        mt: 16,
        mb: 15,
        textColor: '#111827',
      },
      text: { variant: 'atoms.text', override: false },
      preferredLayout: 1,
    },
  },
  organisms: {
    feed: {
      preferredLayout: 1,
      background: { variant: 'atoms.background', override: false },
      container: {
        variant: 'atoms.container',
        override: true,
        borderWidth: 1,
        borderColor: 'hsla(249.9999999999998, 0%, 0%, 1)',
        borderRadius: 26,
        pt: 16,
        pl: 0,
        pr: 0,
      },
      separator: {
        variant: 'atoms.separator',
        override: true,
        background: 'hsla(249.99999999999994, 0%, 0%, 1)',
        mt: 1,
        mb: 0,
      },
      card: { variant: 'atoms.card', override: false },
      avatar: { variant: 'atoms.avatar', override: false },
      name: { variant: 'atoms.heading.h4', override: true },
      username: { variant: 'atoms.heading.h4', override: true },
      date: { variant: 'atoms.caption', override: true },
      actions: { variant: 'atoms.actions', override: true, unique: true },
      paragraph: { variant: 'atoms.paragraph', override: false },
      heading: {
        variant: 'atoms.heading.h3',
        override: false,
        h3: { variant: 'atoms.heading.h3', override: false },
      },
    },
  },
  pages: { styleguide: { card: { variant: 'atoms.card' } } },
}
