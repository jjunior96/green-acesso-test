import styled, { css, keyframes } from 'styled-components';
import { Form } from '@unform/web';
import { shade } from 'polished';

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

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

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Loading = styled.div`
  align-items: center;
  margin: 0 auto;
  font-size: 4rem;

  animation: ${loadingAnimation} 3s linear infinite;
`;

export const Error = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    color: ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.medium};
  `}
`;

// TABLE =======================================
export const TableContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.box.shadow};
    margin-bottom: ${theme.spacings.xsmall};
    overflow: auto;
    white-space: nowrap;
    max-height: calc(100vh - 38rem);

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const TableLine = styled.div`
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

export const FirstData = styled.p`
  ${({ theme }) => css`
    line-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 40%;

    & + p {
      margin-left: ${theme.spacings.small};
    }

    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Data = styled(FirstData)`
  flex: 15%;
`;
