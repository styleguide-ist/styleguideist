export const green = {
  name: 'green',
  label: 'green',
  type: 'light',
  space: {
    x: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  fonts: {
    body: 'Neue Montreal',
    heading: 'Neue Montreal',
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
  shadows: {
    '0': '0 0px 0px rgba(0,0,0,0.12),',
    '1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    default: '0 0 0 rgba(0,0,0,0.12), 0 0 0',
  },
  colors: {
    text: 'hsla(234, 12.5%, 15.686274509803921%, 1)',
    text2: 'hsla(237, 50%, 7.8431372549019605%, 1)',
    background: 'hsla(152.37209142640577, 100%, 69.41%, 1)',
    primary: 'hsla(110.51162631012676, 25.88116817724069%, 16.547352%, 1)',
    secondary: 'hsla(32.7659574468085, 100%, 72.35294117647058%, 1)',
    muted: '#f6f6f6',
    card: 'hsla(59.23076923076927, 55.22268293949484%, 82.87079150000001%, 1)',
    borderColor: 'hsla(265.39534724035934, 37.79%, 16.55%, 0.35)',
    border: 'hsla(246.04617032991104, 100%, 50%, 1)',
  },
  radii: ['7.5px', '15px', '30px', '45px', '60px', '75px', '120px'],
  borders: { border: '0px solid borderColor' },
  forms: { input: {} },
  atoms: {
    card: {
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      borderWidth: 1,
      pt: 0,
      pb: 0,
      pl: 0,
      pr: 0,
      color: 'hsla(249.99999999999943, 5.887335874629391%, 11.011704%, 1)',
      borderColor: 'borderColor',
      borderRadius: 5,
    },
    label: {
      fontWeight: 100,
      letterSpacing: 0.3,
      color: 'hsla(250.00000000000006, 23.931094311562774%, 40.345%, 1)',
      lineHeight: 1.2,
      fontSize: 17,
      mt: 8,
    },
    heading: {
      h1: {
        letterSpacing: 1.2,
        lineHeight: 1.2,
        fontSize: 64,
        fontWeight: 600,
      },
      h2: { letterSpacing: 0.1, lineHeight: 1.2 },
      h3: { letterSpacing: 0.1, lineHeight: 1.2 },
      h4: {
        letterSpacing: 0.1,
        lineHeight: 1.2,
        fontSize: 16,
        fontFamily: 'Manrope',
        mt: 5,
      },
    },
    paragraph: {
      fontSize: 16,
      fontWeight: 800,
      color: 'hsla(95.860463519429, 40.222954497651266%, 28.526%, 1)',
      mr: 0,
      fontFamily: 'Manrope',
      mt: 15,
      lineHeight: 1.7,
    },
    image: {
      borderWidth: 3,
      borderColor: 'hsla(249.7833672913951, 0%, 0%, 1)',
      mt: 0,
      mb: 0,
      ml: 1,
      mr: 12,
      width: 1000,
      height: 343,
      objectPosition: '0px -2px',
      borderRadius: 4,
    },
    name: { fontFamily: 'Manrope', fontWeight: 900, fontSize: 17, mb: 0 },
    caption: {
      color:
        'hsla(249.99999999999994, 24.89851995253856%, 38.695414500000005%, 0.95)',
      fontFamily: 'Manrope',
      fontSize: 14,
      fontWeight: 700,
      mt: 34,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 60,
      borderWidth: 2,
      borderColor:
        'hsla(249.99999999999986, 78.13230895349497%, 55.00210800000001%, 1)',
    },
    button: {
      width: null,
      mt: 20,
      pt: 16,
      pb: 16,
      pl: 24,
      pr: 24,
      fontSize: 16,
      color: 'hsla(60.279068170593696, 100%, 97.255%, 1)',
      height: 59,
      fontWeight: 567,
      fontFamily: 'Manrope',
      boxShadow:
        '8px 6px 61px hsl(0deg 100% 93% / 24%), 3px 4px 18px 0 hsla(78.26086956521742, 100%, 90.98%, 0.7)',
      lineHeight: 1.1,
      borderWidth: 3,
      borderColor:
        'hsla(108.62068965517243, 72.61339314710307%, 77.47073950000001%, 0.98)',
      borderRadius: 57,
      background: 'hsla(259.1162774729175, 16.69973159061734%, 23.56475%, 1)',
      'font-variation-settings': "'wght' 567",
    },
    input: { pt: 24, pb: 24, pl: 24, pr: 2, height: 36, mb: 0 },
    usercard: { mt: 36, mb: 0 },
    field: {},
    actions: {},
    background: {},
    container: {},
    separator: {},
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      preferredLayout: 2,
      card: {
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        variant: 'atoms.card',
        borderWidth: 1,
        pt: 24,
        pb: 24,
        pl: 24,
        pr: 19,
        width: 873,
        height: 395,
      },
      image: { variant: 'atoms.image', order: 1 },
      label: { variant: 'atoms.label', order: 2 },
      heading: { variant: 'atoms.heading.h2', order: 3 },
      paragraph: { variant: 'atoms.paragraph', order: 4 },
      usercard: {
        variant: 'atoms.usercard',
        order: 5,
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
      props: {
        title: 'A Cook Islands Holiday Guide: From Lagoons to Coconut Trees',
        href: '#',
        label: 'Adventure',
        description:
          'Made up of just 15 islands, divided into northern and southern archipelagos, the Cook Islands sits between South America and New Zealand in the middle of the South Pacific. Marking a few small dots on the map of the world – this is as remote as you can get!',
        imageUrl:
          'https://images.unsplash.com/photo-1576567559946-60e4729da9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        authorName: 'Grace Wilson ',
        authorAvatar:
          'https://i.pinimg.com/564x/04/bc/d9/04bcd97100acb998765f02e9b16d7a98.jpg',
        caption: 'Surfer, Life enjoyer',
      },
    },
    form: {
      heading: {
        variant: 'atoms.heading.h1',
        override: true,
        mb: 0,
        fontWeight: 900,
        fontSize: 28,
        textAlign: 'center',
        h1: { variant: 'atoms.heading.h1' },
      },
      card: {
        variant: 'atoms.card',
        override: true,
        borderRadius: 27,
        borderWidth: 1,
        pt: 36,
        pb: 36,
        pl: 36,
        pr: 36,
        height: 'auto',
        width: 484,
        background:
          'hsla(125.16278910082507, 46.965573352963546%, 93.702204%, 1)',
      },
      input: { variant: 'atoms.input', override: false },
      button: {
        variant: 'atoms.button',
        override: false,
        fontSize: 16,
        fontWeight: 567,
        'font-variation-settings': "'wght' 567",
      },
      label: { override: true, unique: true, ml: 8 },
      caption: {
        override: true,
        unique: true,
        color: 'hsla(249.99999999999926, 14.530000000000001%, 21.08%, 0.62)',
        fontFamily: 'Manrope',
        fontSize: 14,
        mr: 0,
        fontWeight: 100,
        ml: 8,
      },
      field: {
        variant: 'atoms.field',
        override: true,
        input: { variant: 'atoms.input', override: false, unique: true },
        label: { override: true, unique: true },
        caption: { override: true, unique: true },
        mt: 20,
        mb: 0,
      },
    },
    feeditem: {
      card: {
        variant: 'atoms.card',
        override: false,
        pt: 24,
        pb: 30,
        pl: 42,
        pr: 42,
        width: 719,
        borderRadius: '41px',
        background: 'hsla(249.99999999999994, 0%, 100%, 0.51)',
        mb: 0,
        mt: 0,
      },
      avatar: {
        variant: 'atoms.avatar',
        override: false,
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        borderWidth: 0,
      },
      name: {
        variant: 'atoms.heading.h4',
        override: true,
        fontSize: '15.1px',
        fontFamily: 'Neue Montreal',
        fontWeight: 600,
        mt: 1,
        mb: 0,
        display: 'block',
        color:
          'hsla(103.7554947075883, 24.898519952538564%, 18.0066185%, 0.91)',
      },
      username: { variant: 'atoms.heading.h4', override: true },
      date: {
        variant: 'atoms.caption',
        override: true,
        ml: 0,
        color: 'hsla(249.9999999999998, 0%, 0%, 0.38)',
        fontFamily: 'Manrope',
        mt: 0,
        display: 'block',
        fontSize: 13,
      },
      title: {
        variant: 'atoms.heading.h3',
        override: false,
        fontFamily: 'Neue Montreal',
        letterSpacing: 0.2,
        lineHeight: -5,
        fontSize: 18,
        mt: 24,
        mb: 18,
      },
      heading: {
        variant: 'atoms.heading.h3',
        override: false,
        fontFamily: 'Neue Montreal',
        letterSpacing: 0.2,
        lineHeight: -5,
        mt: 14,
        mb: 10,
        h3: {
          variant: 'atoms.heading.h3',
          override: false,
          fontFamily: 'Neue Montreal',
          letterSpacing: 0.2,
          lineHeight: -5,
          mt: 24,
          mb: 18,
        },
        fontSize: '17.6px',
      },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
        fontFamily: 'Manrope',
        mt: 0,
        fontSize: '14.4px',
        color: 'hsla(249.99999999999991, 0%, 0%, 0.63)',
        letterSpacing: '0.41px',
        lineHeight: 1.63,
      },
      actions: {
        variant: 'atoms.actions',
        override: true,
        textColor: '#111827',
      },
      text: { variant: 'atoms.text', override: false },
      preferredLayout: 2,
    },
  },
  organisms: {
    feed: {
      preferredLayout: 2,
      background: { variant: 'atoms.background', override: false },
      container: { variant: 'atoms.container', override: true },
      separator: {
        variant: 'atoms.separator',
        override: true,
        background: 'hsla(249.99999999999994, 50.000000000000014%, 20%, 0)',
        mt: 0,
        mb: 0,
        height: 0,
      },
      card: { variant: 'atoms.card', override: true },
      avatar: { variant: 'atoms.avatar', override: false },
      name: { variant: 'atoms.heading.h4', override: true },
      username: { variant: 'atoms.heading.h4', override: true },
      date: { variant: 'atoms.caption', override: true },
      actions: { variant: 'atoms.actions', override: true, unique: true },
      paragraph: { variant: 'atoms.paragraph', override: false },
      heading: {
        variant: 'atoms.heading.h3',
        override: true,
        h3: { variant: 'atoms.heading.h3', override: true },
      },
    },
  },
  pages: { styleguide: { card: { variant: 'atoms.card' } } },
}
