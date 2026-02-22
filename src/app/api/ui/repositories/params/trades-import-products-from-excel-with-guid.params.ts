import { ImportExcelProductRequestAlt } from '../../models/import-excel-product-request-alt.interface';
import { TradesImportProductsFromExcelWithGuid$Params } from '../../../swagger/fn/trades/trades-import-products-from-excel-with-guid';
import { apiImportExcelProductRequestAltDtoAdapter } from '../../adapters/models/api-import-excel-product-request.adapter';

// @ts-ignore
export interface TradesImportProductsFromExcelWithGuidParams {
  body?: ImportExcelProductRequestAlt;
}

export function tradesImportProductsFromExcelWithGuidAdapter(params?: TradesImportProductsFromExcelWithGuidParams): TradesImportProductsFromExcelWithGuid$Params {
  if (!params) {
    return {} as TradesImportProductsFromExcelWithGuid$Params;
  }
  return {
      body: apiImportExcelProductRequestAltDtoAdapter(params.body),
  };
}
