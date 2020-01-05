import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RegionSelector from './RegionSelector';

configure({ adapter: new Adapter() });

describe('<RegionSelector />', () => {
  it('should be defined', () => {
    expect(RegionSelector).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<RegionSelector>RegionSelector</RegionSelector>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
