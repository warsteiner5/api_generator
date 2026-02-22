import { ApiImportExcelLotItemResponseAltDto } from '../../../swagger/models/api-import-excel-lot-item-response';
import { ImportExcelLotItemResponseAlt } from '../../models/import-excel-lot-item-response-alt.interface';
import { importExcelLotItemAltAdapter } from './import-excel-lot-item-alt.adapter';

export const importExcelLotItemResponseAltAdapter = (source?: ApiImportExcelLotItemResponseAltDto | null): ImportExcelLotItemResponseAlt => {
  return {
    allIsEmpty: source?.AllIsEmpty,
    fileGuidWithExceptions: source?.FileGuidWithExceptions,
    importExcelLotItem: source?.ImportExcelLotItem?.map((item) => importExcelLotItemAltAdapter(item)),
  };
}
