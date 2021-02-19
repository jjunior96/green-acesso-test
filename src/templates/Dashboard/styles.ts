import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `}
`;

export const FormContainer = styled(Form)`
  ${({ theme }) => css`
    display: flex;

    div {
      flex: 1;
    }

    button {
      width: 6rem;
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
