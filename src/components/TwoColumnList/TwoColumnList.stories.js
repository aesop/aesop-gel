import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import TwoColumnList from './TwoColumnList';

storiesOf('TwoColumnList', module).add('Base component', () => (
  <TwoColumnList
    leftColumn={object('leftColumn', [
      {
        id: '1',
        heading: 'Title 1',
        subHeading: 'Sub title 1',
        items: [
          {
            id: '1',
            text: 'About',
            url: 'https://www.aesop.com/au/r/about',
          },
          {
            id: '2',
            text: 'About 2',
            url: 'https://www.aesop.com/au/r/about',
          },
        ],
      },
      {
        id: '2',
        heading: 'Title 2',
        subHeading: 'Sub title 2',
        items: [
          {
            id: '1',
            text: 'Philosophy',
            url: 'https://www.aesop.com/au/r/philosophy-to-products',
          },
        ],
      },
    ])}
    rightColumn={object('rightColumn', [
      {
        id: '1',
        heading: 'Suisse Heading 24',
        subHeading: 'Suisse Sub Heading',
        items: [
          {
            id: '1',
            text: 'About link one',
            url: 'https://www.aesop.com/au/r/about',
          },
          {
            id: '2',
            text: 'About text one',
          },
          {
            id: '3',
            text: 'About link two',
            url: 'https://www.aesop.com/au/r/about',
          },
        ],
      },
    ])}
  />
));