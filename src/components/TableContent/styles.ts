import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    margin-bottom: ${theme.spacings.xsmall};
    overflow: auto;
    white-space: nowrap;
    max-height: calc(100vh - 38rem);

    width: 100%;
    /* max-width: 800px; */

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall};

    display: flex;
    padding: ${theme.spacings.xsmall};
    transition: background-color 0.4s;
    text-align: left;

    p {
      line-height: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:hover {
      background-color: ${shade(0.1, theme.colors.white)};
    }

    & + div {
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `}
`;

export const FirstDataTable = styled.p`
  ${({ theme }) => css`
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 25%;

    & + p {
      margin-left: ${theme.spacings.small};
    }

    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const DataTable = styled(FirstDataTable)`
  flex: 15%;
  text-align: left;
`;
