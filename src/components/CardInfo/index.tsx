import { CardInfoData } from './data';

import * as S from './styles';

interface CardInfoProps {
  color?: 'secundaryTitle' | 'otherTitle';
}

const CardInfo: React.FC<CardInfoProps> = ({ color = 'secundaryTitle' }) => {
  return (
    <S.Container>
      {CardInfoData.map((info) => (
        <S.Content key={info.id}>
          <S.Title color={color} aria-label="esporádicos">
            {info.title}
          </S.Title>
          {info.children.map((people) => (
            <S.InfoItem key={people.name}>{people.name}</S.InfoItem>
          ))}
        </S.Content>
      ))}
    </S.Container>
  );
};

export default CardInfo;
