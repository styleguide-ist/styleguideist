// display: block;
// font-weight: 570;
// font-variation-settings: 'wght' 570;
// margin-bottom: -4px;

export const spacy = {
  name: 'spacy',
  label: 'spacy',
  type: 'light',
  space: {
    x: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  fonts: { body: 'Jura', heading: 'Jura', monospace: 'Menlo, monospace' },
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
    text: 'hsla(82.08955223880601, 6.592762351436339%, 13.284203999999999%, 1)',
    text2: '#4E3E9F',
    background: 'hsla(194.23255654268496, 70.42041048018943%, 80.831377%, 1)',
    primary:
      'hsla(249.79591836734693, 71.70731707317071%, 40.19607843137255%, 1)',
    secondary: 'hsla(39.44055944055945, 100%, 71.96078431372548%, 1)',
    muted: '#f6f6f6',
    card: 'white',
    borderColor: 'hsla(82.37288135593235, 5.887335874629394%, 42.809652%, 1)',
    border: 'hsla(246.04617032991104, 100%, 50%, 1)',
  },
  radii: ['0px', '4px', '20px', '10px', '100px'],
  borders: { border: '0px solid borderColor' },
  atoms: {
    card: {
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      borderWidth: 0,
      height: 'auto',
      pt: 0,
      pb: 0,
      pl: 0,
      pr: 0,
    },
    label: {
      fontWeight: 800,
      letterSpacing: -0.5,
      color:
        'hsla(249.99999999999994, 75.87915079011674%, 86.15305799999999%, 1)',
      mb: 8,
      ml: 20,
      fontSize: 16,
    },
    heading: {
      h1: {
        color: 'rgb(34, 36, 32)',
        fontSize: 28,
        fontFamily: 'Orbitron',
        ml: 12,
        letterSpacing: 0.5,
        lineHeight: 1.1,
      },
      h2: {
        color: 'rgb(34, 36, 32)',
        fontSize: 28,
        fontFamily: 'Orbitron',
        ml: 12,
        letterSpacing: 0.5,
        lineHeight: 1.1,
      },
      h3: {
        color: 'rgb(34, 36, 32)',
        fontSize: 16,
        fontFamily: 'Orbitron',
        fontWeight: 550,
        'font-variation-settings': "'wght' 550",
      },
      h4: {
        color: 'hsla(39.44055944055945, 100%, 71.96078431372548%, 1)',
        fontSize: 14,
        fontFamily: 'Jura',
        ml: 0,
        letterSpacing: 0.5,
        lineHeight: 1.1,
        fontWeight: 600,
        mt: 2,
        mb: 0,
      },
    },
    paragraph: {
      fontFamily: 'Jura',
      ml: 12,
      color: 'rgb(34, 36, 32)',
      fontSize: 15,
    },
    image: {
      borderWidth: 4,
      borderColor:
        'hsla(250.00000000000003, 42.01263597377918%, 91.653354%, 1)',
      mb: 12,
      objectPosition: '0px -90px',
      height: 260,
    },
    name: {
      color: 'hsla(39.44055944055945, 100%, 71.96078431372548%, 1)',
      display: 'block',
      fontWeight: '570',
      fontVariationSettings: "'wght' 570",
      marginBottom: '-4px',
    },
    caption: {
      color: 'hsla(39.34883561245349, 100%, 71.94%, 1)',
      fontSize: 13,
    },
    avatar: { width: 40, height: 40 },
    button: { height: 40, borderRadius: 6, borderWidth: 0, pl: 16, pr: 16 },
    input: {
      height: 40,
      color: 'hsla(250, 0%, 0%, 1)',
      borderRadius: 6,
      background: 'hsla(198.41860305431368, 100%, 95.065%, 1)',
      borderColor: 'hsla(263.30232398454535, 46.64%, 39.77%, 1)',
      borderWidth: 1,
    },
    usercard: { pb: 12, ml: 12, pr: 0, mt: 38, mb: 0, pl: 4 },
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      card: {
        variant: 'atoms.card',
        width: 393,
        background:
          'hsla(249.99999999999963, 71.85083347654236%, 40.244204%, 0.76)',
        borderWidth: 1,
        borderRadius: 51,
        pl: 12,
        pr: 12,
        pt: 13,
        pb: 20,
      },
      image: { variant: 'atoms.image', order: 1, width: '100%', height: 192 },
      label: { variant: 'atoms.label', order: 2, ml: 12 },
      heading: {
        variant: 'atoms.heading.h2',
        order: 3,
        color: 'hsla(250.00000000000006, 0%, 92.5%, 1)',
        ml: 12,
      },
      paragraph: {
        variant: 'atoms.paragraph',
        order: 4,
        color: 'hsla(250.00000000000003, 0%, 79.16%, 1)',
        ml: 12,
      },
      usercard: {
        variant: 'atoms.usercard',
        order: 5,
        ml: 12,
        avatar: { variant: 'atoms.avatar' },
        heading: { variant: 'atoms.heading.h4' },
        caption: { variant: 'atoms.caption' },
      },
      props: {
        title: 'Experience a total eclipse of the Sun',
        href: '#',
        label: '#Juno #Jupiter',
        description:
          'NASA’s Juno spacecraft captured this view of Jupiter during the mission’s 40th close pass by the giant planet on Feb. 25, 2022. The large, dark shadow on the left side of the image was cast by Jupiter’s moon Ganymede.\n\n',
        imageUrl:
          'https://i.pinimg.com/564x/f6/9b/56/f69b5603514a7eb128de5c6a9583c09a.jpg',
        authorName: ' Scott Dutfield ',
        authorAvatar:
          'https://cdn.mos.cms.futurecdn.net/2gkDgKD53ikErGxumFEPGM-300-80.png',
        caption: 'Apr 22, 2022  ·  15 min read',
      },
    },
    form: {
      card: {
        borderRadius: 50,
        borderWidth: 2,
        pb: 53,
        borderColor:
          'hsla(249.99999999999974, 49.15212646151369%, 69.49724950000001%, 1)',
        background: 'hsla(250.0000000000004, 100%, 97.56%, 0.62)',
      },
    },
    feeditem: {
      card: {
        variant: 'atoms.card',
        override: false,
        background: 'hsla(250.00000000000003, 0%, 100%, 1)',
        borderColor:
          'hsla(250.26315789473688, 48.71794871794874%, 69.41176470588235%, 1)',
        borderWidth: 1,
        pt: 24,
        pb: 24,
        pl: 24,
        pr: 24,
        width: 578,
        borderRadius: 17,
      },
      avatar: {
        variant: 'atoms.avatar',
        override: false,
      },
      name: {
        variant: 'atoms.heading.h4',
        override: false,
        display: 'block',
        fontWeight: 975,
        'font-variation-settings': "'wght' 975",
      },
      username: {
        variant: 'atoms.heading.h4',
        override: false,
      },
      date: {
        variant: 'atoms.caption',
        override: false,
        display: 'block',
      },
      title: {
        variant: 'atoms.heading.h3',
        override: false,
        mb: 18,
        fontWeight: 550,
        'font-variation-settings': "'wght' 550",
      },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
        mr: 8,
        fontSize: 14,
        mt: 0,
      },
      actions: {
        variant: 'atoms.actions',
        override: false,
        textColor: '#111827',
      },
      text: {
        variant: 'atoms.text',
        override: false,
      },
      preferredLayout: 2,
    },
  },
  organisms: {
    feed: {
      background: {},
      container: {},
      separator: {
        background: 'hsla(221.44185886826634, 100%, 77.56%, 0)',
        mt: 8,
        mb: 0,
      },
      preferredLayout: 2,
    },
  },
  templates: {
    styleguide: {
      card: {
        variant: 'atoms.card',
        borderRadius: 50,
        borderWidth: 2,
        borderColor:
          'hsla(249.99999999999974, 49.15212646151369%, 69.49724950000001%, 1)',
        background: 'hsla(250.0000000000004, 100%, 97.56%, 0.62)',
      },
    },
  },
}
