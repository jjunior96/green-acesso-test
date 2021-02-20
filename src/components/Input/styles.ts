import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 8px;
    padding: 1.6rem 2.6rem;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    display: flex;
    align-items: center;
    height: 56px;

    color: #525c6d;

    input {
      color: ${theme.colors.black};
      background: transparent;
      border: 0;
      flex: 1;

      /* Remove os estilos nas sugestões do Chrome */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.colors.white};
        -webkit-box-shadow: #282f3a26 inset;
        box-shadow: #282f3a26;
        transition: background-color 5000s ease-in-out 0s;
      }

      &::placeholder {
        color: ${theme.colors.mediumGray};
      }
    }

    svg {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    margin-left: ${theme.spacings.xsmall};

    svg {
      margin: 0;
    }

    span {
      background-color: #c53030;
      color: ${theme.colors.white};

      &::before {
        border-color: #c53030 transparent;
      }
    }
  `}
`;
