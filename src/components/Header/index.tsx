import { useSelector } from 'react-redux';

import Title from 'components/Title';
import * as S from './styles';

const Header: React.FC = ({ children }) => {
  const state = useSelector((state) => state);

  // console.log(state);

  return (
    <S.Container aria-label="header">
      <Title>{children}</Title>
      <S.Content>
        <S.Info>
          Seja Bem Vindo! <span>Soon Sam</span>{' '}
        </S.Info>
      </S.Content>
    </S.Container>
  );
};

export default Header;
