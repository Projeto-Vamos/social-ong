import React from 'react';
import { MDBDataTable, MDBFooter } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [
      {
        label: 'Servidor',
        field: 'servidor',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Objetivo geral',
        field: 'objetivoGeral',
        sort: 'asc',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Objetivo geral',
        },
      },
      {
        label: 'Data Planejamento',
        field: 'dataPlanejamento',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Data Objetivo geral',
        field: 'dataObjetivoGeral',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Detalhes',
        field: 'detalhes',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Atualizar',
        field: 'atualizar',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Remover',
        field: 'remover',
        sort: 'asc',
        width: 200
      },
    ],
    rows: props.rows
  };

  return <MDBDataTable
    striped
    bordered
    medium
    data={data}
    hover
    entriesOptions={[5, 10, 15, 20, 25, 30]}
    entries={15}
    pagesAmount={4}
    noBottomColumns
  />
}


export default DatatablePage