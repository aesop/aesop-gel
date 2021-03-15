import React from 'react';
import { render } from '@testing-library/react';
import { AudioHeader } from './AudioHeader';

describe('<Audio.AudioHeader />', () => {
  it('should be defined', () => {
    expect(AudioHeader).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <AudioHeader artistName="foo" trackTitle="bar" />,
    );

    expect(container).toMatchSnapshot();
  });
});
