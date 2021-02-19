import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 30rem;
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
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secundaryTitle};
    margin-bottom: ${theme.spacings.xxsmall};

    p + & {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const InfoItem = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
