import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import CardCount from '.';

describe('CardCount', () => {
  it('should render CardCount component', () => {
    renderWithTheme(<CardCount total={10} />);

    expect(screen.getByLabelText(/total de resultados/i)).toHaveStyle({
      padding: '0.6rem'
    });
  });
});
