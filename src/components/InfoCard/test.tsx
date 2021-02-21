import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import InfoCard from '.';

describe('InfoCard', () => {
  it('should render InfoCard component', () => {
    renderWithTheme(<InfoCard />);

    expect(screen.getByLabelText(/info card/i)).toHaveStyle({
      padding: '1.6rem 1.6rem 0',
      'background-color': '#fff',
      'border-radius': '2rem',
      'box-shadow': '0 8px 8px #eee'
    });
  });
});
