import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 40px 0 0 40px;
    margin-left: 24rem;
    height: 100vh;

    position: relative;

    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.medium};
  `}

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 768px;
  }
`;
