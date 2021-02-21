import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import InfoCard from '.';

describe('InfoCard', () => {
  it('should render InfoCard component', () => {
    renderWithTheme(<InfoCard />);

    expect(screen.getByLabelText(/esporádicos/i)).toHaveStyle({
      color: '#eea258'
    });
  });
});
