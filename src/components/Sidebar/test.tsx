import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Sidebar from '.';

describe('Sidebar', () => {
  it('should render Sidebar component', () => {
    renderWithTheme(<Sidebar />);

    expect(screen.getByLabelText(/sidebar/i)).toHaveStyle({
      width: '24rem'
    });
  });
});
