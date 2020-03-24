import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DialogBanner from './DialogBanner';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('<DialogBanner />', () => {
  it('should be defined', () => {
    expect(DialogBanner).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <DialogBanner
          cta={{
            text: 'Need assistance?',
            url: '/contact-us/',
          }}
          hasCloseButton={true}
          heading="Maximum allowed quantity exceeded."
          isVisible={true}
          message="Our apologies, You have exceeded the maximum allowed quantity of this item."
          onClose={mockFn}
          position="top"
          theme="dark"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
