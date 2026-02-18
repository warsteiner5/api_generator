import { ApiImportExcelLotItemResponseAltDto } from '../../../swagger/models/api-import-excel-lot-item-response';
import { ImportExcelLotItemResponseAlt } from '../../models/import-excel-lot-item-response-alt.interface';
import { adaptImportExcelLotItemAltToUI } from './import-excel-lot-item-alt.adapter';

export function adaptImportExcelLotItemResponseAltToUI(source?: ApiImportExcelLotItemResponseAltDto | null): ImportExcelLotItemResponseAlt {
  return {
    allIsEmpty: source?.AllIsEmpty ?? false,
    fileGuidWithExceptions: source?.FileGuidWithExceptions ?? '',
    importExcelLotItem: (source?.ImportExcelLotItem ?? []).map((item) => adaptImportExcelLotItemAltToUI(item)),
  };
}
