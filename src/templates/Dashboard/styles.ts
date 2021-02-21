import styled, { css, keyframes } from 'styled-components';
import { Form } from '@unform/web';

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerDashboard = styled.div`
  ${({ theme }) => css`
    border-radius: 40px 0 0 40px;
    margin-left: ${theme.grid.sidebar};
    height: 100vh;
    max-width: 100%;

    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.medium};
    display: flex;

    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const ContentDashboard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const ContentPrimary = styled.section`
  width: 100%;
  max-width: 900px;

  @media (max-width: 1500px) {
    max-width: 100%;
  }
`;

export const Notifications = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 280px;

    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    gap: ${theme.spacings.medium};

    @media (max-width: 1500px) {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
      flex-direction: row;
    }

    @media (max-width: 880px) {
      display: none;
    }
  `}
`;

export const Line = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Form)`
  ${({ theme }) => css`
    display: flex;

    div {
      flex: 1;
    }

    button {
      width: 100%;
      max-width: 6rem;
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  animation: ${loadingAnimation} 3s linear infinite;
`;

export const Error = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0 auto;
    color: #ff4f3f;
    font-size: ${theme.font.sizes.medium};
    justify-content: center;
    align-items: center;
  `}
`;
