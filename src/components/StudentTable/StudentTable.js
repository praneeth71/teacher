import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },

  {
      
  }
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, Name: 'Mark Willy', age: 15, Gender: 'Male', Class: 2, Section: 'A', Phone: 8887656458, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Jessia Rose', age: 16, Gender: 'Female', Class: 1, Section: 'A', Phone: 9856868565, Email: 'jessia@gmail.com'  },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com'},
  { id: 2, Name: 'Mark Willy', age: 16, Gender: 'Male', Class: 2, Section: 'A', Phone: 9845465845, Email: 'mark@gmail.com' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}