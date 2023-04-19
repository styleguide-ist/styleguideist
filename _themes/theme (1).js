const a = {
  label: "base",
  space: {
    x: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  fonts: {
    body: "Euclid",
    heading: '"Spotify Circular", sans-serif',
    monospace: "Menlo, monospace",
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
  lineHeights: ["280%"],
  letterSpacings: [
    "3.9px",
    "5.9px",
    "7.9px",
    "11.9px",
    "15.9px",
    "33.9px",
    "49.9px",
    "55.9px",
  ],
  colors: {
    primary: "hsla(208.23529411764707, 100%, 50%, 1)",
    secondary: "green",
    text: "hsla(82.08955223880601, 6.592762351436339%, 13.284203999999999%, 1)",
    text2: "#4E3E9F",
    background: "hsla(0, 0%, 100%, 1)",
    card: "white",
    borderColor: "hsla(82.37288135593235, 5.887335874629394%, 42.809652%, 1)",
  },
  borders: { border: "0px solid borderColor" },
  radii: ["10px", "20px", "30px", "40px", "60px", "120px"],
  shadows: {
    "0": "0 0px 0px rgba(0,0,0,0.12),",
    "1": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "2": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "3": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "4": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "5": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    default: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  atoms: {
    text: {},
    card: {
      bg: "card",
      border: "border",
      borderColor: "borderColor",
      boxShadow: "default",
      height: "auto",
      borderRadius: 4,
      pt: "y.5",
      pb: "y.5",
      pl: "x.5",
      pr: "x.5",
    },
    label: {
      color: "primary",
      fontWeight: "regular",
      fontSize: 1,
      marginBottom: "y.2",
      marginLeft: "x.5",
      marginRight: "x.5",
      order: "1",
    },
    heading: {
      fontSize: 4,
      h1: { color: "text", lineHeight: "normal", fontSize: 5 },
      h2: {
        color: "text",
        lineHeight: "normal",
        fontSize: 4,
        marginLeft: "x.5",
        marginRight: "x.5",
        marginBottom: "y.3",
        order: "10",
      },
      h3: { color: "text", lineHeight: "normal", fontSize: 3 },
      h4: {
        color: "text",
        fontWeight: "regular",
        lineHeight: "normal",
        fontSize: 2,
      },
    },
    paragraph: {
      color: "text2",
      fontSize: 2,
      fontWeight: "regular",
      marginLeft: "x.5",
      marginRight: "x.5",
      marginBottom: "y.5",
    },
    image: { borderRadius: 3, marginBottom: "y.5" },
    name: {},
    caption: { color: "text2", fontSize: 1, fontWeight: "regular" },
    avatar: {},
    button: {
      height: 40,
      borderRadius: 6,
      borderWidth: 0,
      pl: 16,
      pr: 16,
      mt: 16,
    },
    input: {
      height: 40,
      color: "hsla(250, 0%, 0%, 1)",
      borderRadius: 6,
      background: "hsla(250, 0%, 96.86274509803921%, 1)",
      borderColor: "hsla(250, 0%, 90.19607843137256%, 1)",
    },
    usercard: {},
    field: {},
    actions: {},
    background: {},
    container: {},
    separator: {},
  },
  molecules: {
    blogpost: {
      card: { variant: "atoms.card", override: false },
      image: { variant: "atoms.image", override: false, order: 1 },
      label: { variant: "atoms.label", override: false, order: 2 },
      heading: { variant: "atoms.heading.h2", override: false, order: 3 },
      paragraph: { variant: "atoms.paragraph", override: false, order: 4 },
      usercard: {
        variant: "atoms.usercard",
        override: false,
        order: 5,
        name: { variant: "atoms.heading.h4" },
        caption: { variant: "atoms.caption" },
      },
      props: {},
    },
    form: {
      heading: { variant: "atoms.heading.h1", override: false },
      card: { variant: "atoms.card", override: false },
      input: { variant: "atoms.input", override: false },
      button: { variant: "atoms.button", override: false },
      label: { override: true, unique: true },
      caption: { override: true, unique: true },
      field: {
        variant: "atoms.field",
        override: true,
        input: { variant: "atoms.input", override: false, unique: true },
        label: { override: true, unique: true },
        caption: { override: true, unique: true },
      },
    },
    feeditem: {
      preferredLayout: 1,
      card: { variant: "atoms.card", override: false },
      avatar: { variant: "atoms.avatar", override: false },
      name: { variant: "atoms.name", override: false },
      username: { variant: "atoms.username", override: false },
      date: { variant: "atoms.date", override: false },
      title: { variant: "atoms.title", override: false },
      paragraph: { variant: "atoms.paragraph", override: false },
      actions: { variant: "atoms.actions", override: false },
      text: { variant: "atoms.text", override: false },
    },
  },
  organisms: {
    feed: {
      preferredLayout: 1,
      background: { variant: "atoms.background", override: false },
      container: { variant: "atoms.container", override: false },
      separator: { variant: "atoms.separator", override: false },
      card: { variant: "atoms.card", override: false },
      avatar: { variant: "atoms.avatar", override: false },
      name: { variant: "atoms.heading.h4", override: true },
      username: { variant: "atoms.heading.h4", override: true },
      date: { variant: "atoms.caption", override: true },
      actions: { variant: "atoms.actions", override: true, unique: true },
      paragraph: { variant: "atoms.paragraph", override: false },
      heading: {
        variant: "atoms.heading.h3",
        override: false,
        h3: { variant: "atoms.heading.h3", override: false },
      },
    },
  },
  templates: { styleguide: { card: { variant: "atoms.card" } } },
};
