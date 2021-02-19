import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

const listAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const logoAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}

  width: 24rem;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.ul`
  padding: 2rem 1.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  animation: ${listAnimation} 0.6s;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    cursor: pointer;

    & + li {
      margin-top: ${theme.spacings.xxsmall};
    }

    a {
      color: ${theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: ${theme.border.radius};
      padding: 0.8rem 1.4rem;
      transition: background-color 0.4s;
      text-decoration: none;

      p {
        margin-left: ${theme.spacings.xxsmall};
      }

      &:hover {
        background-color: ${shade(0.2, theme.colors.primary)};
      }
    }
  `}
`;

export const MenuTitle = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};

    &:first-child {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    svg {
      margin-right: ${theme.spacings.xxsmall};
      font-size: 2.2rem;
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    a {
      margin-top: ${theme.spacings.xsmall};
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;

      img {
        height: 34px;

        animation: ${logoAnimation} 1s;
      }

      p {
        margin-top: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.white};
        font-weight: ${theme.font.bold};
        transition: color 0.4s;

        &:hover {
          color: ${shade(0.2, theme.colors.primary)};
        }
      }
    }
  `}
`;

export const Settings = styled.div``;
