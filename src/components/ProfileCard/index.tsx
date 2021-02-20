import Link from 'next/link';

import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';

import * as S from './styles';

const ProfileCard = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ProfilePhoto>
          <img src="/assets/profile.png" alt="Foto de perfil" />
        </S.ProfilePhoto>

        <Link href="/">Sair</Link>
      </S.Content>

      <S.Content>
        <IoIosNotificationsOutline />
        <FiMoreHorizontal />
      </S.Content>
    </S.Container>
  );
};

export default ProfileCard;
