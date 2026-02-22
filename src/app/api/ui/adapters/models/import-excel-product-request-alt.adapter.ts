import { ApiImportExcelProductRequestAltDto } from '../../../swagger/models/api-import-excel-product-request';
import { ImportExcelProductRequestAlt } from '../../models/import-excel-product-request-alt.interface';

export const importExcelProductRequestAltAdapter = (source?: ApiImportExcelProductRequestAltDto | null): ImportExcelProductRequestAlt => {
  return {
    fileGuid: source?.FileGuid,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct,
    isSendToEis: source?.IsSendToEis,
    isUnitBidding: source?.IsUnitBidding,
    zmoFzType: source?.ZmoFzType,
  };
}
