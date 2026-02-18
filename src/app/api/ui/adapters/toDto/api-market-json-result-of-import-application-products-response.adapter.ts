import { MarketJsonResultOfImportApplicationProductsResponse } from '../../models/market-json-result-of-import-application-products-response.interface';
import { ApiMarketJsonResultOfImportApplicationProductsResponse } from '../../../swagger/models/api-market-json-result-of-import-application-products-response';

export function adaptApiMarketJsonResultOfImportApplicationProductsResponse(source?: MarketJsonResultOfImportApplicationProductsResponse | null): ApiMarketJsonResultOfImportApplicationProductsResponse {
  return (source ?? {}) as ApiMarketJsonResultOfImportApplicationProductsResponse;
}
