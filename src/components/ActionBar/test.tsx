import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import ActionBar from '.';

describe('ActionBar', () => {
  it('should render ActionBar component', () => {
    renderWithTheme(<ActionBar />);

    expect(screen.getByLabelText(/adicionar/i)).toHaveStyle({
      width: '10rem'
    });
  });
});
