import { ApiImportExcelLotItemRequestAltDto } from '../../../swagger/models/api-import-excel-lot-item-request';
import { ImportExcelLotItemRequestAlt } from '../../models/import-excel-lot-item-request-alt.interface';

export function adaptImportExcelLotItemRequestAltToUI(source?: ApiImportExcelLotItemRequestAltDto | null): ImportExcelLotItemRequestAlt {
  return {
    fileGuid: source?.FileGuid ?? '',
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
