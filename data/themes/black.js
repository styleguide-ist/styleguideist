export const black = {
  label: 'black',
  space: {
    x: [
      '2.66',
      5.32,
      10.64,
      15.96,
      21.28,
      26.6,
      31.92,
      42.56,
      63.84,
      85.12,
      170.24,
      340.48,
      680.96,
      1361.92,
    ],
    y: ['3', 6, 12, 18, 24, 30, 36, 48, 72, 96, 192, 384, 768, 1536],
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui',
    monospace: 'monospace',
  },
  fontSizes: [
    14.395333333333332,
    17.012666666666668,
    19.63,
    23.555999999999997,
    27.481999999999996,
    31.408,
    62.816,
  ],
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
    primary:
      'hsla(208.23529411764707, 30.49719431032234%, 49.80949999999999%, 1)',
    secondary: 'green',
    text: 'hsla(82.08955223880642, 25.9087416637811%, 84.24915399999999%, 1)',
    text2: 'hsla(249.89690721649495, 7.060000000000008%, 69.14%, 0.56)',
    background: 'hsla(181.67441700780122, 34.31%, 2.6%, 1)',
    card: 'hsla(0, 0%, 100%, 0)',
    borderColor: 'hsla(82.37288135593238, 0%, 100%, 1)',
  },
  borders: { border: '3px solid black' },
  radii: ['0px', '4px', '20px', '10px', '100px'],
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
    },
    label: { color: 'primary', fontWeight: 'regular', fontSize: 1 },
    heading: {
      fontSize: 4,
      h1: { color: 'text', lineHeight: 'normal', fontSize: 5 },
      h2: { color: 'text', lineHeight: 'normal', fontSize: 4 },
      h3: { color: 'text', lineHeight: 'normal', fontSize: 3 },
      h4: {
        color: 'text',
        fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 16,
        mt: 5,
      },
    },
    paragraph: { color: 'text2', fontSize: 2, fontWeight: 'regular' },
    image: {},
    name: {},
    caption: { color: 'text2', fontSize: 14, fontWeight: 'regular' },
    avatar: {},
    button: {},
    input: {},
    usercard: {},
  },
  molecules: {
    blogpost: {
      card: { variant: 'atoms.card', override: false },
      image: { variant: 'atoms.image', override: false, order: 1 },
      label: {
        variant: 'atoms.label',
        override: false,
        order: 2,
        // ml: '0px'
      },
      heading: {
        variant: 'atoms.heading.h2',
        override: false,
        order: 3,
        // ml: '0px',
      },
      paragraph: { variant: 'atoms.paragraph', override: false, order: 4 },
      usercard: {
        variant: 'atoms.usercard',
        override: false,
        order: 5,
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
    },
    form: {
      card: { variant: 'atoms.card', override: false },
      input: { variant: 'atoms.input', override: false },
      button: { variant: 'atoms.button', override: false },
    },
    feeditem: {
      card: { variant: 'atoms.card', override: false },
      avatar: { variant: 'atoms.avatar', override: false },
      name: { variant: 'atoms.name', override: false },
      username: { variant: 'atoms.username', override: false },
      date: { variant: 'atoms.date', override: false },
      title: { variant: 'atoms.title', override: false },
      paragraph: { variant: 'atoms.paragraph', override: false },
      actions: { variant: 'atoms.actions', override: false },
      text: { variant: 'atoms.text', override: false },
      preferredLayout: 2,
      usercard: {
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
    },
  },
  organisms: {
    feed: { background: {}, container: {}, separator: {}, preferredLayout: 2 },
    styleguide: { card: { variant: 'atoms.card' } },
  },
}
