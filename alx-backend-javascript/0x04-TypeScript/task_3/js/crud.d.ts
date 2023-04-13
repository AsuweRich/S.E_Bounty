import {RowElement, RowID} from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): number;
declare function updateRow(rowId: RowID, row: RowElement): number;
