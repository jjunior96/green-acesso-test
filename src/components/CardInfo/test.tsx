import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import CardInfo from '.';

describe('CardInfo', () => {
  it('should render CardInfo component', () => {
    renderWithTheme(<CardInfo />);

    expect(screen.getByLabelText(/esporádicos/i)).toHaveStyle({
      color: '#eea258'
    });
  });
});
