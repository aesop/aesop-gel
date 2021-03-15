import React from 'react';
import { render } from '@testing-library/react';
import { AudioFooter } from './AudioFooter';

describe('<Audio.AudioFooter />', () => {
  it('should be defined', () => {
    expect(AudioFooter).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<AudioFooter audioUrl="/" />);

    expect(container).toMatchSnapshot();
  });
});
