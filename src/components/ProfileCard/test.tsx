import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import ProfileCard from '.';

describe('ProfileCard', () => {
  it('should render ProfileCard component', () => {
    renderWithTheme(<ProfileCard />);

    expect(screen.getByLabelText(/profile card/i)).toHaveStyle({
      width: '100%',
      'max-width': '30rem',
      padding: '1.6rem',
      'background-color': '#fff',
      'border-radius': '2rem',
      'box-shadow': '0 8px 8px #eee',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-between'
    });
  });
});
