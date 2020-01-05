import React from 'react';
import { storiesOf } from '@storybook/react';
import 'normalize.css';
import '~/styles/base.module.css';
import '~/styles/storybook.module.css';
import CartHeader from './CartHeader';
import CartHeaderFixture from './CartHeader.fixture';

storiesOf('Views.CartView.CartHeader', module).add('Base component', () => (
  <CartHeader copy={CartHeaderFixture.copy} handleOnClose={() => false} />
));
