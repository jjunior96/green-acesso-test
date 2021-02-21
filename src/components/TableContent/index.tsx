import CardCount from 'components/ResultCardTable';

import * as S from './styles';

export interface InfoProps {
  id: number;
  login: string;
  node_id: string;
  avatar_url: string;
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
            <S.FirstDataTable>{item.login}</S.FirstDataTable>
            <S.DataTable>{item.node_id}</S.DataTable>
            <S.DataTable>{item.avatar_url}</S.DataTable>
            <S.DataTable>{item.url}</S.DataTable>
            <S.DataTable>{item.html_url}</S.DataTable>
          </S.Line>
        ))}
      </S.Container>
      <CardCount total={info.length} />
    </>
  );
};

export default TableContent;
