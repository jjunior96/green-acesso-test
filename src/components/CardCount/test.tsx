import { render, screen } from '@testing-library/react';

import CardCount from '.';

describe('<CardCount />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardCount />);

    expect(
      screen.getByRole('heading', { name: /CardCount/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
