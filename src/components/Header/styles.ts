import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 20rem;
`;

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.mediumGray};

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.mediumGray};
      font-weight: ${theme.font.bold};
    }
  `}
`;
