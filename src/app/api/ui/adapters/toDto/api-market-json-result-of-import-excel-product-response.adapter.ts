import { MarketJsonResultOfImportExcelProductResponse } from '../../models/market-json-result-of-import-excel-product-response.interface';
import { ApiMarketJsonResultOfImportExcelProductResponse } from '../../../swagger/models/api-market-json-result-of-import-excel-product-response';

export function adaptApiMarketJsonResultOfImportExcelProductResponse(source?: MarketJsonResultOfImportExcelProductResponse | null): ApiMarketJsonResultOfImportExcelProductResponse {
  return (source ?? {}) as ApiMarketJsonResultOfImportExcelProductResponse;
}
