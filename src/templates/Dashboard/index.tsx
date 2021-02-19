import { FormEvent, useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { BiSearch } from 'react-icons/bi';

import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Input from 'components/Input';
import Button from 'components/Button';
import CardInfo from 'components/CardInfo';
import ActionBar from 'components/ActionBar';
import ProfileCard from 'components/ProfileCard';
import Header from 'components/Header';
import Table from 'components/TableContent';
import api from 'services/api';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [searchPeople, setSearchPeople] = useState('');

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault;

      const response = await api.get(`${searchPeople}`);

      console.log(response);
    },
    [searchPeople]
  );

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
                value={searchPeople}
                onChange={(e) => setSearchPeople(e.target.value)}
                placeholder="Pesquisar pelo nome ou CPF..."
              />
              <Button type="submit">
                <BiSearch />
              </Button>
            </S.FormContainer>
            <ActionBar />
            <Table />
          </S.PrimaryInfo>
          <S.Notifications>
            <ProfileCard />
            <CardInfo />
            <CardInfo />
          </S.Notifications>
        </S.Content>
      </Main>
    </S.Container>
  );
};

export default Dashboard;
