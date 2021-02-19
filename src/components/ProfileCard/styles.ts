import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    a {
      margin-left: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.small};
      text-decoration: none;
      color: ${theme.colors.mediumGray};
      transition: color 0.4s, background-color 0.4s;
      padding: 0.3rem;
      border-radius: 4px;

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.mediumGray};
      }
    }

    svg {
      color: ${theme.colors.mediumGray};
      font-size: ${theme.font.sizes.xxlarge};
      transition: color 0.4s, background-color 0.4s;
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.mediumGray};
      }

      & + svg {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `}
`;

export const ProfilePhoto = styled.div`
  ${({ theme }) => css`
    width: 4.4rem;
    height: 4.4rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`;
