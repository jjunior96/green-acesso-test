import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Button from '.';

describe('Button', () => {
  it('should render Button component', () => {
    renderWithTheme(<Button>Entrar</Button>);

    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      height: '54px'
    });
  });
});
