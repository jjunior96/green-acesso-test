import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isFocused }) => css`
    background: ${theme.colors.white};
    border-radius: 8px;
    padding: 1.6rem 2.6rem;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    display: flex;
    align-items: center;
    height: 56px;
    border: 2px solid ${theme.colors.white};

    color: ${theme.colors.mediumGray};

    ${isFocused &&
    css`
      border-color: ${theme.colors.buttonSearch};
    `}

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
