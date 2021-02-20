import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { BiSearch as SearchIcon } from 'react-icons/bi';
import { VscLoading as LoadingIcon } from 'react-icons/vsc';

import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Input from 'components/Input';
import Button from 'components/Button';
import CardInfo from 'components/CardInfo';
import ActionBar from 'components/ActionBar';
import ProfileCard from 'components/ProfileCard';
import Header from 'components/Header';
import Table, { InfoProps } from 'components/TableContent';
import api from 'services/api';

import * as S from './styles';

const Dashboard: React.FC = () => {
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
        const response = await api.get<InfoProps>(`users/${search}/repos`);

        const repository = response.data;

        setRepositories([repository]);

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

    api.get(`/users`).then((response) => setRepositories([response.data]));

    setIsLoading(false);
  }, []);

  return (
    <S.Container>
      <Sidebar />
      <Main>
        <S.Content>
          <S.PrimaryInfo>
            <Header> Cadastro -{'>'} Pessoas </Header>
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

            {inputError && <S.Error>{inputError}</S.Error>}

            {isLoading ? (
              <S.Loading>
                <LoadingIcon />
              </S.Loading>
            ) : (
              repositories.map((repository) => (
                <Table key={repository.id} info={repository} />
              ))
            )}
          </S.PrimaryInfo>
          <S.Notifications>
            <ProfileCard />
            <CardInfo color="secundaryTitle" />
            <CardInfo color="otherTitle" />
          </S.Notifications>
        </S.Content>
      </Main>
    </S.Container>
  );
};

export default Dashboard;
