import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Button from '.';

describe('<Button />', () => {
  it('should render Button component', () => {
    renderWithTheme(<Button>Entrar</Button>);

    expect(screen.getByLabelText(/botao/i)).toHaveStyle({
      height: '54px',
      padding: '0 1.6rem',
      color: '#fff',
      'font-weight': '400',
      'border-radius': '8px'
    });
  });
});
