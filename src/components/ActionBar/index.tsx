import { ActionBarData } from './data';

import * as S from './styles';

const ActionBar = () => {
  return (
    <S.Container aria-label="barra de acoes">
      <S.ActionContainer>
        {ActionBarData.map((item) => (
          <S.ActionItem key={item.id} aria-label={item.name}>
            {item.icon}
            {item.name}
          </S.ActionItem>
        ))}
      </S.ActionContainer>
    </S.Container>
  );
};

export default ActionBar;
