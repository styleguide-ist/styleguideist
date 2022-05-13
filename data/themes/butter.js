export const butter = {
  name: 'butter',
  label: 'yellow',
  type: 'light',
  space: { base: { x: '6', y: '5' } },
  fontSizes: { base: 19 },
  fonts: { body: 'Eesti', heading: 'Eesti', monospace: 'Menlo, monospace' },
  fontWeights: { body: 400, heading: 700, bold: 900 },
  lineHeights: ['280%'],
  colors: {
    text: 'hsla(237, 50%, 7.8431372549019605%, 1)',
    text2: 'hsla(237, 50%, 7.8431372549019605%, 1)',
    background: 'hsla(59.23076923076923, 100%, 69.41176470588235%, 1)',
    primary: 'hsla(240.2790681705918, 0%, 0%, 1)',
    secondary: 'hsla(32.7659574468085, 100%, 72.35294117647058%, 1)',
    muted: '#f6f6f6',
    card: 'hsla(59.23076923076923, 100%, 69.41176470588235%, 1)',
    borderColor: 'hsla(82.37288135593238, 0%, 0%, 1)',
    border: 'hsla(246.04617032991104, 100%, 50%, 1)',
  },
  styles: {
    root: { fontFamily: 'body', lineHeight: 'body', fontWeight: 'body' },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: { color: 'primary' },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: { color: 'inherit' },
    },
    code: { fontFamily: 'monospace', fontSize: 'inherit' },
    table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0 },
    th: { textAlign: 'left', borderBottomStyle: 'solid' },
    td: { textAlign: 'left', borderBottomStyle: 'solid' },
    img: { maxWidth: '100%' },
  },
  radii: ['5.25px', '10.5px', '21px', '42px', '84px'],
  borders: { border: '0px solid borderColor' },
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
    default: '0 0 0 0 #0a0b1e',
  },
  buttons: {
    primary: {},
    secondary: { color: 'background', bg: 'secondary' },
    atoms: { card: { width: '100px', height: '100px' } },
  },
  forms: { input: {} },
  atoms: {
    card: {
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      borderWidth: 1,
      width: 413,
      pt: 0,
      pb: 0,
      pl: 0,
      pr: 0,
      borderRadius: 3,
    },
    label: {
      fontWeight: 400,
      fontSize: 12,
      ml: 24,
      borderRadius: 0,
      borderWidth: 1,
      borderColor: 'hsla(249.99999999999943, 0%, 0%, 1)',
      background: '#6bbbfd',
      width: 'max-content',
      paddingLeft: 6,
      paddingRight: 6,
    },
    heading: { mt: 10, mb: 16, textAlign: 'start', ml: 24, fontWeight: 500 },
    paragraph: { fontSize: 18, fontWeight: 100, display: 'none' },
    image: {
      borderWidth: 1,
      borderColor: 'hsla(249.7833672913951, 0%, 0%, 1)',
      mt: 0,
      mb: 28,
      ml: 0,
      mr: 0,
      height: 262,
      borderRadius: 80,
      background: '#6bbbfd',
    },
    name: { fontSize: 12, display: 'block', marginBottom: -3, fontWeight: 400 },
    caption: { fontSize: 12, color: 'hsla(249.99999999999994, 0%, 0%, 0.47)' },
    avatar: { display: 'none' },
    button: {
      pt: 0,
      pb: 0,
      height: 48,
      width: 484,
      borderRadius: 16,
      fontSize: 16,
      fontWeight: 600,
    },
    input: { height: 48 },
    usercard: { mt: 0, ml: 24 },
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      card: {
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        borderWidth: 0,
        borderRadius: 0,
        pt: 0,
        pb: 0,
        pl: 0,
        pr: 0,
        width: 420,
      },
      image: { order: 1, width: '100%', height: 192 },
      label: { order: 2 },
      heading: { order: 3, fontWeight: 500 },
      paragraph: { order: 4 },
      usercard: { order: 5 },
      props: {
        title: 'How to choose an A-team for your Design Sprint',
        href: '#',
        label: 'COMMUNITY VOICES',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        imageUrl:
          'https://uploads-ssl.webflow.com/611b774c624f22e8063bb429/620d34d49d120641f545817c_Community%20voice-OverviewThumb-How%20to%20create%20an%20A-team.png',
        authorName: 'Steph Cruchon, CEO @ Design Sprint Ltd',
        authorAvatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        caption: 'February 16, 2022',
      },
    },
    form: {
      card: {
        background: 'hsla(249.99999999999994, 0%, 100%, 1)',
        width: 564,
        pt: 40,
        pb: 40,
        pl: 40,
        pr: 40,
      },
    },
    feeditem: {
      card: {
        pt: 24,
        pb: 16,
        pl: 32,
        pr: 32,
        width: 575,
        mt: 0,
        background: 'white',
        borderWidth: 3,
      },
      avatar: {
        display: 'block',
        width: 48,
        height: 48,
        mt: 6,
        mr: 3,
        borderWidth: 2,
        borderColor: 'hsla(0, 0%, 0%, 1)',
      },
      name: { fontWeight: 800, fontSize: 21, letterSpacing: 0.3 },
      username: {
        fontWeight: 300,
        color: 'hsla(249.99999999999994, 50.000000000000014%, 20%, 0.68)',
      },
      date: {
        color: 'hsla(249.99999999999994, 50.000000000000014%, 20%, 0.68)',
        fontWeight: 200,
        fontSize: 16,
      },
      title: {},
      paragraph: {
        color: 'hsla(0, 0%, 0%, 0.9)',
        mb: 25,
        display: 'block',
        fontWeight: 300,
        mt: 7,
      },
      actions: {},
      text: {},
      preferredLayout: 4,
    },
  },
  organisms: { feed: { preferredLayout: 1, preferredFeedItemLayout: 4 } },
}
