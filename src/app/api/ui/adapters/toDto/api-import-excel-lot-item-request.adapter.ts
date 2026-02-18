import { ImportExcelLotItemRequestAlt } from '../../models/import-excel-lot-item-request-alt.interface';
import { ApiImportExcelLotItemRequestAltDto } from '../../../swagger/models/api-import-excel-lot-item-request';

export function adaptApiImportExcelLotItemRequestAltDto(source?: ImportExcelLotItemRequestAlt | null): ApiImportExcelLotItemRequestAltDto {
  return {
    FileGuid: source?.fileGuid,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsUnitBidding: source?.isUnitBidding,
    ZmoFzType: source?.zmoFzType,
  };
}
