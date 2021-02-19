import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    display: flex;
    margin: 0 auto;
  `}
`;

export const PrimaryInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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

export const Notifications = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    width: 100%;
    max-width: 28rem;
    gap: ${theme.spacings.medium};
  `}
`;
