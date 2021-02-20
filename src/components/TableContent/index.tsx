import CardCount from 'components/CardCount';

import * as S from './styles';

export interface InfoProps {
  id: number;
  login: string;
  node_id: string;
  type: string;
  html_url: string;
  url: string;
}

interface TableProps {
  infos: InfoProps[];
}

const TableContent = ({ infos }: TableProps) => {
  return (
    <>
      <S.Container aria-label="resultados da busca">
        {infos.map((item) => (
          <S.Line key={item.id}>
            <S.Place>{item.login}</S.Place>
            <S.Code>{item.node_id}</S.Code>
            <S.Phone>{item.type}</S.Phone>
            <S.Email>{item.url}</S.Email>
            <S.Address>{item.html_url}</S.Address>
          </S.Line>
        ))}
      </S.Container>
      <CardCount total={infos.length} />
    </>
  );
};

export default TableContent;
