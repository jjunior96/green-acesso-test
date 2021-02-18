import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #292d3abf;
  border-radius: 8px;
  border: 0;
  padding: 0 1.6rem;
  width: 100%;
  color: #fff;
  font-weight: 400;
  font-size: 1.6rem;
  height: 54px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#292d3abf')};
  }
`;
