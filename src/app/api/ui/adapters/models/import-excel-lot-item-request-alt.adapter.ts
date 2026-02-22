import { ApiImportExcelLotItemRequestAltDto } from '../../../swagger/models/api-import-excel-lot-item-request';
import { ImportExcelLotItemRequestAlt } from '../../models/import-excel-lot-item-request-alt.interface';

export const importExcelLotItemRequestAltAdapter = (source?: ApiImportExcelLotItemRequestAltDto | null): ImportExcelLotItemRequestAlt => {
  return {
    fileGuid: source?.FileGuid,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct,
    isUnitBidding: source?.IsUnitBidding,
    zmoFzType: source?.ZmoFzType,
  };
}
