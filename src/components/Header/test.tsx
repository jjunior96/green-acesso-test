import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Header from '.';

describe('Header', () => {
  it('should render Header component', () => {
    renderWithTheme(<Header name="name" />);

    expect(screen.getByLabelText(/header/i)).toHaveStyle({
      display: 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
      width: '100%'
    });
  });
});
