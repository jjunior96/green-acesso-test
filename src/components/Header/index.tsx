import Title from 'components/Title';
import * as S from './styles';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ children, name }) => {
  return (
    <S.Container aria-label="header">
      <Title>{children}</Title>
      <S.Content>
        <S.Info>
          Seja Bem Vindo! <span>{name}</span>
        </S.Info>
      </S.Content>
    </S.Container>
  );
};

export default Header;
