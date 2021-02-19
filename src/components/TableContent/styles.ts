import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    margin-bottom: ${theme.spacings.xsmall};
    overflow: hidden;
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall};

    display: flex;
    padding: ${theme.spacings.xsmall};
    transition: background-color 0.4s;

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

export const Place = styled.p`
  ${({ theme }) => css`
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 30%;

    & + p {
      margin-left: ${theme.spacings.small};
    }

    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Code = styled(Place)`
  flex: 15%;
`;

export const Phone = styled(Place)`
  flex: 15%;
`;

export const Email = styled(Place)`
  flex: 15%;
`;

export const Address = styled(Place)`
  flex: 25%;
`;
