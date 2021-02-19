import { render, screen } from '@testing-library/react';

import CardInfo from '.';

describe('<CardInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardInfo />);

    expect(
      screen.getByRole('heading', { name: /CardInfo/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
