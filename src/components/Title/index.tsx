import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    max-width: 680px;
  `}
`;

export default Title;
