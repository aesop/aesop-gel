import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'alabaster',
        value: '#fffef0',
      },
      {
        name: 'charcoal',
        value: '#333',
      },
    ],
  },
  options: {
    storySort: {
      order: ['Compositions', 'Contexts', 'Hooks', 'Form Elements'],
    },
  },
};

addDecorator(withKnobs);

export { parameters };
