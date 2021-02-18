import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

type OpenProps = {
  isOpen: boolean;
};

const changeAppearanceOpen = keyframes`
  from {
    opacity: 1;
    width: 22rem;

  }

  to {
    opacity: 1;
    width: 7.4rem;
  }
`;

const changeAppearanceClosed = keyframes`
  from {
    opacity: 1;
    width: 7.4rem;
  }

  to {
    opacity: 1;
    width: 22rem;
  }
`;

const mobileAppearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
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

export const Container = styled.aside<OpenProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}

  width: 24rem;
  height: 100vh;
  position: fixed;
  left: 0;

  ul {
    width: 100%;
    padding: 2rem 1.6rem;
    display: flex;
    flex-direction: column;

    /* Icon para abrir ou fechar a sidebar */
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.6rem;
      padding: 0.8rem 1.4rem;

      h2 {
        color: #fff;
      }

      svg {
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;
        color: #fff;
        transition: color 0.3s;

        &:hover {
          color: #0b46a3;
        }
      }
    }

    li {
      list-style: none;

      & + li {
        margin-top: 1.6rem;
      }

      a {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 8px;
        padding: 0.8rem 1.4rem;
        transition: background-color 0.4s;
        text-decoration: none;

        p {
          margin-left: 1rem;
        }

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }

        &:hover {
          background-color: ${shade(0.2, '#15bf52')};
        }
      }
    }
  }

  ${(props) =>
    props.isOpen &&
    css`
      animation: ${changeAppearanceClosed} 0.6s;
      display: flex;
      align-items: center;
      flex-direction: column;

      ul {
        animation: ${mobileAppearFromRight} 0.6s;
      }
    `}

  ${(props) =>
    !props.isOpen &&
    css`
      width: 7.4rem;
      animation: ${changeAppearanceOpen} 0.6s;
      display: flex;
      align-items: center;
      flex-direction: column;

      ul {
        display: flex;
        align-items: center;

        > div {
          margin-bottom: 1.6rem;

          h2 {
            display: none;
          }
        }
      }

      p {
        display: none;
        visibility: hidden;
      }
    `}

  /* Mobile */
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;

    animation: none;

    ul {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 0;

      > div {
        display: flex;
        width: 100%;
        padding: 2rem;
        align-items: center;
        justify-content: space-between;
      }
    }

    li {
      display: none;
      visibility: hidden;
    }

    ${(props) =>
      props.isOpen &&
      css`
        display: flex;
        position: fixed;
        left: 0;
        height: 100vh;
        width: 22rem;
        align-items: center;
        flex-direction: column;
        animation: ${changeAppearanceClosed} 0.6s;

        ul {
          display: flex;
          flex-direction: column;
          animation: ${mobileAppearFromRight} 0.6s;
        }

        li {
          display: block;
          visibility: visible;
        }
      `}
  }
`;

export const Logo = styled.div`
  a {
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    img {
      height: 34px;

      animation: ${logoAnimation} 1s;
    }

    p {
      margin-top: 0.8rem;
      font-size: 1.8rem;
      color: #fff;
      font-weight: 600;
      transition: color 0.4s;

      &:hover {
        color: ${shade(0.2, '#15bf52')};
      }
    }
  }
`;
