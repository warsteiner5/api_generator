import { ApiImportExcelProductRequestAltDto } from '../../../swagger/models/api-import-excel-product-request';
import { ImportExcelProductRequestAlt } from '../../models/import-excel-product-request-alt.interface';

export function adaptImportExcelProductRequestAltToUI(source?: ApiImportExcelProductRequestAltDto | null): ImportExcelProductRequestAlt {
  return {
    fileGuid: source?.FileGuid ?? '',
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
    isSendToEis: source?.IsSendToEis ?? false,
    isUnitBidding: source?.IsUnitBidding ?? false,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
