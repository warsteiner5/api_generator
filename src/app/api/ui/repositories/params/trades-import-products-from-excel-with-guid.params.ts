import { ImportExcelProductRequestAlt } from '../../models/import-excel-product-request-alt.interface';
import { TradesImportProductsFromExcelWithGuid$Params } from '../../../swagger/fn/trades/trades-import-products-from-excel-with-guid';
import { adaptApiImportExcelProductRequestAltDto } from '../../adapters/toDto/api-import-excel-product-request.adapter';

export interface TradesImportProductsFromExcelWithGuidParams {
  body?: ImportExcelProductRequestAlt;
}

export const tradesImportProductsFromExcelWithGuidParamsAdapter = {
  adapt(params?: TradesImportProductsFromExcelWithGuidParams): TradesImportProductsFromExcelWithGuid$Params {
    if (!params) {
      return {} as TradesImportProductsFromExcelWithGuid$Params;
    }
    return {
      body: adaptApiImportExcelProductRequestAltDto(params.body),
    };
  }
};
