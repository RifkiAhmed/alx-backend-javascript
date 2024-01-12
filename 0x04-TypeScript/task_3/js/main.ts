/// <reference path='./crud.d.ts' />
import { RowID, RowElement } from "../interface";
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
// result -> Insert row {firstName: "Guillaume", lastName: "Salva"}

const updateRow: RowElement = { ...row, age: 23 }
CRUD.updateRow(newRowID, updateRow);
// result -> Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowID);
// result -> Delete row id 125
