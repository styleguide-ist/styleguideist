export const fontFields = [
  {
    type: 'fontpicker',
    key: 'fontFamily',
    label: 'Family',
    // min: '6',
    // max: '64',
  },
  {
    type: 'slider',
    key: 'fontSize',
    label: 'Size',
    min: '6',
    max: '64',
    step: '0.1',
  },
  {
    type: 'slider',
    key: 'fontWeight',
    label: 'Weight',
    min: '100',
    max: '900',
    step: 100,
  },
  {
    type: 'slider',
    key: 'letterSpacing',
    label: 'Kerning',
    min: '-5',
    max: '5',
    step: '0.01',
  },
  {
    type: 'slider',
    key: 'lineHeight',
    label: 'Leading',
    min: '-5',
    max: '5',
    step: '0.01',
  },
]

export const fontParams = () => ({
  type: 'font',
  name: 'Font',
  fields: fontFields,
})
