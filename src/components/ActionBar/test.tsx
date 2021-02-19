import { render, screen } from '@testing-library/react';

import ActionBar from '.';

describe('<ActionBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ActionBar />);

    expect(
      screen.getByRole('heading', { name: /ActionBar/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
