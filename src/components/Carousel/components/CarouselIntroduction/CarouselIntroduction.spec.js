import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CarouselFixture from '../../Carousel.fixture';
import CarouselIntroduction from './Slide';

configure({ adapter: new Adapter() });

describe('<Carousel.CarouselIntroduction />', () => {
  it('should be defined', () => {
    expect(CarouselIntroduction).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <CarouselIntroduction
          description={CarouselFixture.introduction.description}
          heading={CarouselFixture.introduction.heading}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
