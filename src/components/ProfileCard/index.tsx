import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';

import { loginOnApp } from 'store/modules/user/actions';
import { IUser } from 'store/modules/user/types';
import { ProfileData } from './data';

import * as S from './styles';

const ProfileCard = () => {
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();

  const handleExitApp = useCallback(
    (user: IUser) => {
      dispatch(loginOnApp(user));
      setIsLogged(!isLogged);
    },
    [dispatch, isLogged]
  );

  return (
    <S.Container aria-label="profile card">
      <S.Content>
        <S.ProfilePhoto>
          {isLogged ? (
            <img src="/assets/profile.png" alt="Foto de perfil" />
          ) : (
            <img src="/assets/login.png" alt="Foto de perfil" />
          )}
        </S.ProfilePhoto>

        {ProfileData.map((user) => (
          <div key={user.id}>
            <button type="button" onClick={() => handleExitApp(user)}>
              {isLogged ? 'Sair' : 'Login'}
            </button>
          </div>
        ))}
      </S.Content>

      <S.Content>
        <IoIosNotificationsOutline />
        <FiMoreHorizontal />
      </S.Content>
    </S.Container>
  );
};

export default ProfileCard;
