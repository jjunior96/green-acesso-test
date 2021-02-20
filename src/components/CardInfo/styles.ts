/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors[color!]};
    margin-bottom: ${theme.spacings.xxsmall};
    text-transform: uppercase;

    p + & {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const InfoItem = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.mediumGray};
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
