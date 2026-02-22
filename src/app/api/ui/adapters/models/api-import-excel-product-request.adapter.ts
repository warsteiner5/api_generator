import { ImportExcelProductRequestAlt } from '../../models/import-excel-product-request-alt.interface';
import { ApiImportExcelProductRequestAltDto } from '../../../swagger/models/api-import-excel-product-request';

export const apiImportExcelProductRequestAltDtoAdapter = (source?: ImportExcelProductRequestAlt | null): ApiImportExcelProductRequestAltDto => {
  return {
    FileGuid: source?.fileGuid,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsSendToEis: source?.isSendToEis,
    IsUnitBidding: source?.isUnitBidding,
    ZmoFzType: source?.zmoFzType,
  };
}
