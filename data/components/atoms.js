import {
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Heading,
  Title,
  Paragraph,
  Label,
  Link,
  Card,
  Image,
  Name,
  Caption,
  Avatar,
  Badge,
  UserCard,
  Section,
  Text,
} from 'components/atoms'

import {
  spacingParams as spacing,
  fontParams as font,
  colorParams as color,
  borderParams as border,
  shadowParams as shadow,
  otherParams as other,
} from 'data/parameters'

export const atoms = [
  {
    label: 'Button',
    value: 'button',
    component: Button,
    group: 'atoms',
    params: [
      color(),
      font(),
      shadow(),
      border(),
      spacing({ margins: true, paddings: true, dimensions: true }),
    ],
  },
  {
    label: 'Input',
    value: 'input',
    component: Input,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
      font(),
      border(),
      shadow(),
      spacing({ margins: true, paddings: true, dimensions: true }),
    ],
  },
  {
    label: 'Image',
    value: 'image',
    component: Image,
    group: 'atoms',
    params: [border(), spacing({ dimensions: true, margins: true }), shadow()],
  },
  {
    label: 'Avatar',
    value: 'avatar',
    component: Avatar,
    group: 'atoms',
    params: [border(), spacing({ dimensions: true, margins: true }), shadow()],
  },
  {
    label: 'Heading',
    value: 'heading',
    component: Heading,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Text',
    value: 'text',
    component: Text,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Paragraph',
    value: 'paragraph',
    component: Paragraph,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Label',
    value: 'label',
    component: Label,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      border(),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'Caption',
    value: 'caption',
    component: Caption,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
    ],
  },
  {
    label: 'Section',
    value: 'section',
    component: Section,
    group: 'atoms',
    // params: [color(), border(), spacing({ dimensions: true, paddings: true })],
  },
  {
    label: 'Card',
    value: 'card',
    component: Card,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Background',
          },
        ],
      }),
      border(),
      spacing({ dimensions: true, paddings: true, margins: true }),
      shadow(),
      other(),
    ],
  },
  {
    label: 'Name',
    value: 'name',
    component: Name,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
    ],
  },
  // {
  //   label: 'Select',
  //   value: 'select',
  //   component: Select,
  //   group: 'atoms',
  // },
  // {
  //   label: 'Textarea',
  //   value: 'textarea',
  //   component: Textarea,
  //   group: 'atoms',
  // },
  // {
  //   label: 'Checkbox',
  //   value: 'checkbox',
  //   component: Checkbox,
  //   group: 'atoms',
  // },
  // {
  //   label: 'Badge',
  //   value: 'badge',
  //   component: Badge,
  //   group: 'atoms',
  // },
  {
    label: 'Title',
    value: 'title',
    component: Title,
    group: 'atoms',
    params: [
      color(),
      font(),
      spacing({ margins: true }),
      shadow({ field: 'textShadow' }),
      other(),
    ],
  },
  {
    label: 'User card',
    value: 'usercard',
    component: UserCard,
    group: 'atoms',
    params: [
      // color(),
      // font(),
      spacing({ margins: true, paddings: true, dimensions: true }),
      shadow(),
      border(),
      other(),
    ],
  },
  {
    label: 'Actions',
    value: 'actions',
    // component: Actions,
    group: 'atoms',
    params: [
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'textColor',
            label: 'Text color',
          },
          {
            type: 'colorpicker',
            key: 'iconColor',
            label: 'Icon color',
          },
          {
            type: 'colorpicker',
            key: 'activeIconColor',
            label: 'Active icon color',
          },
        ],
      }),
      font(),
      spacing({ margins: true, paddings: true, dimensions: true }),
      shadow(),
      border(),
      other(),
    ],
  },
  {
    label: 'Separator',
    value: 'separator',
    // component: Actions,
    group: 'atoms',
    params: [
      // color(),
      // font(),
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Color',
          },
        ],
      }),
      shadow(),
      spacing({ margins: true, dimensions: true }),
      // shadow(),
      // border(),
      // other(),
    ],
  },
  {
    label: 'Container',
    value: 'container',
    // component: Actions,
    group: 'atoms',
    params: [
      // color(),
      // font(),
      color({
        fields: [
          {
            type: 'colorpicker',
            key: 'background',
            label: 'Color',
          },
        ],
      }),
      shadow(),
      border(),
      spacing({ margins: true, paddings: true, dimensions: true }),
      // shadow(),
      // other(),
    ],
  },
]
