import { ImportExcelLotItemResponseAlt } from '../../models/import-excel-lot-item-response-alt.interface';
import { ApiImportExcelLotItemResponseAltDto } from '../../../swagger/models/api-import-excel-lot-item-response';
import { apiImportExcelLotItemAltDtoAdapter } from './api-import-excel-lot-item.adapter';

export const apiImportExcelLotItemResponseAltDtoAdapter = (source?: ImportExcelLotItemResponseAlt | null): ApiImportExcelLotItemResponseAltDto => {
  return {
    AllIsEmpty: source?.allIsEmpty,
    FileGuidWithExceptions: source?.fileGuidWithExceptions,
    ImportExcelLotItem: source?.importExcelLotItem?.map((item) => apiImportExcelLotItemAltDtoAdapter(item)),
  };
}
