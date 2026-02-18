import { ApiMarketJsonResultOfImportExcelProductResponse } from '../../../swagger/models/api-market-json-result-of-import-excel-product-response';
import { MarketJsonResultOfImportExcelProductResponse } from '../../models/market-json-result-of-import-excel-product-response.interface';

export function adaptMarketJsonResultOfImportExcelProductResponseToUI(source?: ApiMarketJsonResultOfImportExcelProductResponse | null): MarketJsonResultOfImportExcelProductResponse {
  return (source ?? {}) as MarketJsonResultOfImportExcelProductResponse;
}
