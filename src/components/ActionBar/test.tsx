import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import ActionBar from '.';

describe('ActionBar', () => {
  it('should render ActionBar component', () => {
    renderWithTheme(<ActionBar />);

    expect(screen.getByLabelText(/barra de acoes/i)).toHaveStyle({
      overflow: 'auto',
      'background-color': '#fff'
    });

    expect(screen.getByLabelText(/adicionar/i)).toHaveStyle({
      width: '10rem',
      height: '100%',
      cursor: 'pointer'
    });
  });
});
