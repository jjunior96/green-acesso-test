import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.buttonSearch};
    border-radius: 8px;
    border: 0;
    padding: 0 1.6rem;
    width: 100%;
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: ${theme.font.sizes.medium};
    height: 54px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, theme.colors.buttonSearch)};
    }

    svg {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
