export const gray = {
  name: 'gray',
  label: 'gray',
  type: 'dark',
  space: {
    x: [
      '2.73',
      5.46,
      10.92,
      16.38,
      21.84,
      27.3,
      32.76,
      43.68,
      65.52,
      87.36,
      174.72,
      349.44,
      698.88,
      1397.76,
    ],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  fonts: { body: 'Roboto', heading: 'Roboto', monospace: 'Menlo, monospace' },
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
    text: 'hsla(237.00000000000185, 3.4875297526648024%, 49.117029%, 1)',
    text2:
      'hsla(236.99999999999972, 19.45241986854711%, 55.09486449999999%, 1)',
    background: 'hsla(152.37209142640577, 25.88116817724068%, 10.057104%, 1)',
    primary:
      'hsla(108.41860305431302, 23.931094311562767%, 26.216181000000006%, 1)',
    secondary: 'hsla(32.7659574468085, 100%, 72.35294117647058%, 1)',
    muted: '#f6f6f6',
    card: 'hsla(59.23076923076927, 55.22268293949484%, 82.87079150000001%, 1)',
    borderColor:
      'hsla(265.39534724035934, 14.513471110681722%, 71.141652%, 0.35)',
    border: 'hsla(246.04617032991104, 100%, 50%, 1)',
  },
  radii: ['0px', '0px', '0px', '0px', '0px'],
  borders: { border: '0px solid borderColor' },
  atoms: {
    card: {
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      borderWidth: 1,
      width: 495,
      pt: 0,
      pb: 0,
      pl: 76,
      pr: 93,
      color: 'hsla(249.99999999999943, 5.887335874629391%, 11.011704%, 1)',
      height: 'auto',
      borderColor: 'rgb(63, 63, 63)',
    },
    label: {
      fontWeight: 800,
      letterSpacing: -0.5,
      fontFamily: 'Encode_Sans',
      color: 'hsla(250.0000000000009, 40.95823616043035%, 52.000079%, 1)',
      fontSize: 14,
      mb: 52,
      mt: 0,
      display: 'none',
    },
    heading: {
      h1: {
        fontFamily: 'Luckiest_Guy',
        textShadow:
          '12px 8px 93px hsla(0, 61.4465611882467%, 49.85550599999999%, 1), 3px 5px 0 hsla(249.99999999999994, 83.68846436443792%, 42.915051999999996%, 1)',
        fontWeight: 100,
        color: 'hsla(250.0000000000001, 43.21085808393436%, 77.98875%, 1)',
        fontSize: 39,
        lineHeight: 0.9,
        letterSpacing: 1.1,
        mt: 33,
        mb: 49,
      },
      h2: {
        fontFamily: 'Luckiest_Guy',
        textShadow:
          '12px 8px 93px hsla(0, 61.4465611882467%, 49.85550599999999%, 1), 3px 5px 0 hsla(249.99999999999994, 83.68846436443792%, 42.915051999999996%, 1)',
        fontWeight: 100,
        color: 'hsla(250.0000000000001, 43.21085808393436%, 77.98875%, 1)',
        fontSize: 34,
        lineHeight: 0.9,
        letterSpacing: 1.1,
        mt: 33,
        mb: 17,
      },
      h3: {
        fontSize: 27,
        fontFamily: 'Bangers',
        mb: 33,
        mt: 22,
        color: 'hsla(51.917496079644536, 100%, 58.50500000000001%, 1)',
      },
      h4: {
        color: 'text',
        fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 2,
      },
    },
    paragraph: {
      fontSize: 28,
      fontWeight: 100,
      color:
        'hsla(95.86046351942852, 4.8437827636821185%, 45.305499999999995%, 1)',
      fontFamily: 'BebasNeue',
      letterSpacing: -0.2,
      lineHeight: 1.2,
      mr: 5,
      ml: 0,
    },
    image: {
      borderWidth: 1,
      borderColor: 'hsla(249.7833672913951, 0%, 0%, 1)',
      mt: 0,
      mb: 0,
      ml: 0,
      mr: 0,
      width: 414,
      borderRadius: 39,
      height: 241,
    },
    name: { fontSize: 15, fontFamily: 'Cinzel', fontWeight: 100 },
    caption: { fontSize: 12 },
    avatar: { borderRadius: 6 },
    button: {
      width: null,
      mt: 8,
      pt: 14,
      pb: 16,
      pl: 24,
      pr: 24,
      fontSize: 20,
      color: 'hsla(53.9999984031498, 100%, 90.065%, 1)',
      fontFamily: 'Luckiest_Guy',
      letterSpacing: 3.2,
      lineHeight: -0.8,
      fontWeight: 800,
      mb: 44,
      height: 55,
      borderWidth: 0,
      borderColor: 'hsla(275.860463519429, 11.523645841279023%, 58.926879%, 1)',
    },
    input: {
      pt: 24,
      pb: 24,
      pl: 24,
      pr: 2,
      borderRadius: 0,
      borderColor:
        'hsla(249.99999999999994, 49.42625138639317%, 63.083614499999996%, 1)',
      height: 12,
      background: 'hsla(249.94368240792434, 0%, 95.83%, 0)',
      boxShadow:
        '13px 5px 15px 4px hsla(0, 36.04000000000001%, 27.800000000000004%, 0.33), 8px 12px 46px hsla(249.99999999999994, 85.49%, 62.07%, 0.19)',
      mb: 9,
      color: '#6e6b7f8c',
      fontFamily: 'Bangers',
      lineHeight: -5,
      letterSpacing: 2.2,
    },
    usercard: {
      borderRadius: 17,
      borderWidth: 1,
      pt: 16,
      pb: 16,
      pl: 16,
      pr: 16,
      borderColor:
        'hsla(249.99999999999994, 31.570291428195517%, 37.113241499999994%, 1)',
    },
    title: {},
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
      card: {
        variant: 'atoms.card',
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        borderWidth: 0,
        borderColor: 'hsla(249.99999999999994, 0%, 0%, 1)',
        width: 496,
        pl: 39,
        pr: 39,
        pt: 32.5,
        pb: 32.5,
      },
      image: { variant: 'atoms.image', order: 1 },
      label: { variant: 'atoms.label', order: 2, ml: 0 },
      heading: { variant: 'atoms.heading.h2', order: 3, ml: 0 },
      paragraph: { variant: 'atoms.paragraph', order: 4, ml: 0, mr: 0 },
      usercard: {
        variant: 'atoms.usercard',
        order: 5,
        display: 'none',
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
      props: {
        title:
          'Lil Uzi Vert:                        ‘I’m Not Gonna Act Gangster’',
        href: '#',
        label: 'Case Study',
        description:
          '“I’m a happy person and I vibe with my fans if you see me I’m not gonna act gangster because that not what I am or who I am,” Uzi wrote. “it’s okay 2 smile 😃 🤓 I’m myself.”',
        imageUrl: 'img/uzi.webp',
        authorName: 'Daniela Metz',
        authorAvatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        caption: 'Publicist',
      },
    },
    form: {
      preferredLayout: 2,
      heading: { variant: 'atoms.heading.h1' },
      card: {
        variant: 'atoms.card',
        override: true,
        borderWidth: 0,
        width: 590,
        background: 'hsla(249.99999999999994, 91.36%, 29.600000000000005%, 0)',
        pt: 0,
        pb: 39,
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
        width: '100%',
        maxWidth: '100%',
        pl: 36,
        pr: 36,
        mt: '0px !important',
        pt: '32px !important',
      },
      avatar: {
        variant: 'atoms.avatar',
        override: false,
        width: 99,
        height: 99,
        mr: 28,
        borderRadius: 100,
        minWidth: 99,
        minHeight: 99,
      },
      name: {
        variant: 'atoms.heading.h4',
        override: true,
        fontFamily: 'Luckiest_Guy',
        textShadow:
          '12px 8px 93px hsla(0, 61.4465611882467%, 49.85550599999999%, 1), 3px 5px 0 hsla(249.99999999999994, 83.68846436443792%, 42.915051999999996%, 1)',
        fontWeight: 100,
        color: 'hsla(250.0000000000001, 43.21085808393436%, 77.98875%, 1)',
        fontSize: '32.1px',
        lineHeight: 0.9,
        letterSpacing: 1.1,
        mt: 17,
        mb: 0,
        mr: 14,
        display: 'block',
      },
      username: {
        variant: 'atoms.heading.h4',
        override: true,
        display: 'none',
        fontSize: 27,
      },
      date: { variant: 'atoms.caption', override: true, display: 'none' },
      title: {
        variant: 'atoms.heading.h3',
        override: false,
        fontSize: 27,
        fontFamily: 'Bangers',
        mb: 33,
        mt: 22,
        color: 'hsla(51.917496079644536, 100%, 58.50500000000001%, 1)',
      },
      heading: {
        variant: 'atoms.heading.h3',
        override: false,
        h3: { variant: 'atoms.heading.h3', override: false },
      },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
        fontSize: 25,
        fontWeight: 100,
        color:
          'hsla(95.86046351942852, 4.8437827636821185%, 45.305499999999995%, 1)',
        fontFamily: 'BebasNeue',
        mt: 18,
        letterSpacing: -0.2,
        lineHeight: 1.2,
        mr: 5,
        ml: 0,
      },
      actions: {
        variant: 'atoms.actions',
        override: true,
        mt: 19,
        mb: 24,
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
        borderColor: 'hsla(250.0000000000029, 0%, 24.66%, 1)',
        pl: 0,
        pr: 0,
      },
      separator: {
        variant: 'atoms.separator',
        override: true,
        background: 'hsla(250, 0%, 24.705882352941178%, 1)',
        mt: '0',
        mb: '0',
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
