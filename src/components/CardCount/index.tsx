import * as S from './styles';

interface CardCountProps {
  total: number;
}

const CardCount = ({ total }: CardCountProps) => {
  return (
    <S.Container aria-label="total de resultados">
      <S.Info>1 de {total} repositórios</S.Info>
    </S.Container>
  );
};

export default CardCount;
