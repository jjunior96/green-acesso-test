import {
  RiAddCircleLine,
  RiEditCircleLine,
  RiDeleteBin6Line
} from 'react-icons/ri';
import { MdFingerprint, MdUpdate } from 'react-icons/md';

import * as S from './styles';

const ActionBar = () => {
  return (
    <S.Container>
      <S.ActionContainer>
        <S.ActionItem aria-label="adicionar">
          <RiAddCircleLine />
          <p>Adicionar</p>
        </S.ActionItem>
        <S.ActionItem>
          <RiEditCircleLine />
          <p>Editar</p>
        </S.ActionItem>
        <S.ActionItem>
          <MdFingerprint />
          <p>Biometria</p>
        </S.ActionItem>
        <S.ActionItem>
          <RiDeleteBin6Line />
          <p>Deletar</p>
        </S.ActionItem>
        <S.ActionItem>
          <MdUpdate />
          <p>Atualizar</p>
        </S.ActionItem>
      </S.ActionContainer>
    </S.Container>
  );
};

export default ActionBar;
