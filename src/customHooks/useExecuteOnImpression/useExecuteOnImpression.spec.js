import React, { useRef } from 'react';
import { useExecuteOnImpression } from './useExecuteOnImpression';
import * as useOnScreenHook from '../useOnScreen';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('useExecuteOnImpression', () => {
  const callback = jest.fn();
  const useOnScreenSpy = jest.spyOn(useOnScreenHook, 'useOnScreen');

  // eslint-disable-next-line react/prop-types
  const TestRig = ({ options }) => {
    const ref = useRef(null);
    useExecuteOnImpression(ref, callback, options);

    return <div ref={ref}>Hello word</div>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call useOnScreen using the passed in options', () => {
    const options = {
      threshold: 0.32,
      isExecutableOnReEntry: false,
    };

    mount(<TestRig options={options} />);

    expect(useOnScreenSpy).toHaveBeenCalledWith(
      expect.any(Object),
      options.threshold,
      undefined,
      options.isExecutableOnReEntry,
    );
  });

  it('should call useOnScreen with the default values if options are not provided', () => {
    mount(<TestRig />);

    expect(useOnScreenSpy).toHaveBeenCalledWith(
      expect.any(Object),
      0.2,
      undefined,
      true,
    );
  });

  it('should not call the function if the element is not on screen', () => {
    useOnScreenSpy.mockReturnValue(false);

    mount(<TestRig />);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should call the function  when the element is in view', () => {
    useOnScreenSpy.mockReturnValue(true);

    mount(<TestRig />);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
