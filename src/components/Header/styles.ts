import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 100%;
`;

export const Info = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.mediumGray};

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.mediumGray};
      font-weight: ${theme.font.bold};
    }
  `}
`;
