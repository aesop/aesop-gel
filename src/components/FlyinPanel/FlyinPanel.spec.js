import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FlyinPanel } from './FlyinPanel';

describe('<FlyinPanel />', () => {
  const handleOnClose = jest.fn();

  it('should be defined', () => {
    expect(FlyinPanel).toBeDefined();
  });

  it('renders component correctly and fires the close button on click', () => {
    render(
      <FlyinPanel
        copy={{ close: 'close flyin panel button' }}
        isVisible={true}
        onClose={handleOnClose}
      >
        flyin panel
      </FlyinPanel>,
    );

    expect(screen.getByText(/flyin panel/i)).toBeTruthy();
    expect(screen.getByRole('note')).toBeTruthy();

    userEvent.click(screen.getByTitle(/close flyin panel button/i));

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});