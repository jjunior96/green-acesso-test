import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 24rem);
    border-radius: 40px 0 0 40px;
    margin-left: 24rem;
    height: 100vh;

    position: relative;

    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.small};
  `}
`;
