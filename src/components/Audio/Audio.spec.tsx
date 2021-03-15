import React from 'react';
import { render } from '@testing-library/react';
import { Audio } from './Audio';
import { AudioFixture } from './Audio.fixture';

describe('<Audio />', () => {
  it('should be defined', () => {
    expect(Audio).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Audio
        artistName={AudioFixture.artistName}
        audioUrl={AudioFixture.audioUrl}
        copy={AudioFixture.copy}
        hasAutoPlay={AudioFixture.hasAutoPlay}
        id={AudioFixture.id}
        progressColor={AudioFixture.progressColor}
        trackTitle={AudioFixture.trackTitle}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
