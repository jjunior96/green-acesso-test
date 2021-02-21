import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    max-width: 680px;
    color: ${theme.colors.darkText};
    margin: ${theme.spacings.medium} 0;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }
  `}
`;

export default Title;
