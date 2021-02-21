import { useSelector } from 'react-redux';

import Title from 'components/Title';
import * as S from './styles';
import { IState } from 'store';

const Header: React.FC = ({ children }) => {
  // const { name } = useSelector<IState>((state) => state.user);

  return (
    <S.Container aria-label="header">
      <Title>{children}</Title>
      <S.Content>
        <S.Info>
          Seja Bem Vindo! <span>Soon Sam</span>
        </S.Info>
      </S.Content>
    </S.Container>
  );
};

export default Header;
