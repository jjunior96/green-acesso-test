import { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { BiSearch } from 'react-icons/bi';

import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Input from 'components/Input';
import * as S from './styles';
import Button from 'components/Button';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('foi');
  }, []);

  return (
    <S.Container>
      <Sidebar />
      <Main>
        <S.Content>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input name="search" placeholder="Pesquisar pelo nome ou CPF..." />
            <Button>
              <BiSearch />
            </Button>
          </Form>
        </S.Content>
      </Main>
    </S.Container>
  );
};

export default Dashboard;
