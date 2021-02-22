import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { BiSearch as SearchIcon } from 'react-icons/bi';
import { VscLoading as LoadingIcon } from 'react-icons/vsc';
import { MdKeyboardArrowRight as Arrow } from 'react-icons/md';

import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Button from 'components/Button';
import InfoCard from 'components/InfoCard';
import ActionBar from 'components/ActionBar';
import ProfileCard from 'components/ProfileCard';
import Header from 'components/Header';
import TableContent, { InfoProps } from 'components/TableContent';
import Main from 'components/Main';

import { IState } from 'store';
import { IUser } from 'store/modules/user/types';
import api from 'services/api';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const user = useSelector<IState, IUser>((state) => state.user);
  const formRef = useRef<FormHandles>(null);
  const [search, setSearch] = useState('');
  const [repositories, setRepositories] = useState<InfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault;

      if (!search) {
        setInputError('Digite um usuário');
        return;
      }

      try {
        setInputError('');
        setIsLoading(true);
        const response = await api.get<InfoProps[]>(`users/${search}/repos`);

        const repository = response.data;

        setRepositories(repository);

        setIsLoading(false);
      } catch (err) {
        setInputError('Usuário não encontrado');
        setIsLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    setIsLoading(true);

    api
      .get<InfoProps[]>(`/users`)
      .then((response) => setRepositories(response.data));

    setIsLoading(false);
  }, []);

  return (
    <>
      <Sidebar />
      <S.ContainerDashboard>
        <Main>
          <S.ContentDashboard>
            <S.ContentPrimary>
              <Header name={user.name}>
                {' '}
                Cadastro{' '}
                <span>
                  <Arrow />
                </span>{' '}
                Pessoas{' '}
              </Header>
              <S.FormContainer onSubmit={handleSubmit} ref={formRef}>
                <Input
                  name="search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar por nome de usuário GitHub"
                />
                <Button type="submit">
                  <SearchIcon />
                </Button>
              </S.FormContainer>
              <ActionBar />

              {inputError && (
                <S.Error>
                  {' '}
                  <p>{inputError}</p>
                </S.Error>
              )}

              {isLoading ? (
                <S.Line>
                  <S.Loading>
                    <LoadingIcon />
                  </S.Loading>
                </S.Line>
              ) : (
                <TableContent info={repositories} />
              )}
            </S.ContentPrimary>
            <S.Notifications>
              <ProfileCard />
              <InfoCard color="secundaryTitle" />
              <InfoCard color="otherTitle" />
            </S.Notifications>
          </S.ContentDashboard>
        </Main>
      </S.ContainerDashboard>
    </>
  );
};

export default Dashboard;
