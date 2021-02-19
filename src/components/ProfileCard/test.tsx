import { render, screen } from '@testing-library/react';

import ProfileCard from '.';

describe('<ProfileCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileCard />);

    expect(
      screen.getByRole('heading', { name: /ProfileCard/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
