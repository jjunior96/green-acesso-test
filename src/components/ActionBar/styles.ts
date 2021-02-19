import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xsmall} 0;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    background-color: ${theme.colors.white};
    overflow: hidden;
  `}
`;

export const ActionContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const ActionItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    height: 100%;
    width: 10rem;
    cursor: pointer;
    transition: background-color 0.2s;

    & + li {
      border-left: 1px solid ${theme.colors.lightGray};
    }

    &:last-child {
      border-right: 1px solid ${theme.colors.lightGray};
    }

    svg {
      font-size: 3rem;
      color: ${theme.colors.black};
      margin-bottom: 0.4rem;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.black};
    }

    &:hover {
      p {
        color: ${theme.colors.white};
      }
      svg {
        color: ${theme.colors.white};
      }
      background-color: ${theme.colors.buttonSearch};
    }
  `}
`;
