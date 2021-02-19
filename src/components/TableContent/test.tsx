import { render, screen } from '@testing-library/react';

import TableContent from '.';

describe('<TableContent />', () => {
  it('should render the heading', () => {
    const { container } = render(<TableContent />);

    expect(
      screen.getByRole('heading', { name: /TableContent/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
