import { ImportExcelLotItemAlt } from './import-excel-lot-item-alt.interface';

// @ts-ignore
export interface ImportExcelLotItemResponseAlt {
  allIsEmpty: boolean;
  fileGuidWithExceptions: string;
  importExcelLotItem: ImportExcelLotItemAlt[];
}
