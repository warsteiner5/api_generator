import { ImportExcelLotItemAlt } from './import-excel-lot-item-alt.interface';

export interface ImportExcelLotItemResponseAlt {
  allIsEmpty: boolean;
  fileGuidWithExceptions: string;
  importExcelLotItem: ImportExcelLotItemAlt[];
}
