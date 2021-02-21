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

export interface TableProps {
  info: InfoProps[];
}

const TableContent: React.FC<TableProps> = ({ info }) => {
  return (
    <>
      <S.Container aria-label="resultados da busca">
        {info.map((item, index) => (
          <S.Line key={index}>
            <S.Place>{item.login}</S.Place>
            <S.Code>{item.node_id}</S.Code>
            <S.Phone>{item.type}</S.Phone>
            <S.Email>{item.url}</S.Email>
            <S.Address>{item.html_url}</S.Address>
          </S.Line>
        ))}
      </S.Container>
      <CardCount total={info.length} />
    </>
  );
};

export default TableContent;
