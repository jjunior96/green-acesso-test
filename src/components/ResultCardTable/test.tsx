import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import ResultCardTable from '.';

describe('ResultCardTable', () => {
  it('should render ResultCardTable component', () => {
    renderWithTheme(<ResultCardTable total={10} />);

    expect(screen.getByLabelText(/total de resultados/i)).toHaveStyle({
      padding: '0.6rem'
    });
  });
});
