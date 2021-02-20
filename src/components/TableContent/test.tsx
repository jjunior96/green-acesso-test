import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import TableContent from '.';

import mock from './mock';

describe('TableContent', () => {
  it('should render TableContent component', () => {
    renderWithTheme(<TableContent infos={mock} />);

    expect(screen.getByLabelText(/resultados da busca/i)).toHaveStyle({
      overflow: 'auto'
    });
  });
});
