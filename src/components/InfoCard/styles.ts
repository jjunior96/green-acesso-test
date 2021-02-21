/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall} 0;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    max-width: 100%;
  `}

  @media (max-width: 1500px) {
    max-width: 28rem;
  }
`;

export const Content = styled.div`
  max-width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primaryTitle};
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
    line-height: 2.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:last-child {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;
