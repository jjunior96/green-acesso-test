import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple};
    width: 100%;
    max-width: 12rem;
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: 6px;
    padding: 0.6rem;
  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `}
`;
