import { ApiMarketJsonResultOfImportApplicationProductsResponse } from '../../../swagger/models/api-market-json-result-of-import-application-products-response';
import { MarketJsonResultOfImportApplicationProductsResponse } from '../../models/market-json-result-of-import-application-products-response.interface';

export function adaptMarketJsonResultOfImportApplicationProductsResponseToUI(source?: ApiMarketJsonResultOfImportApplicationProductsResponse | null): MarketJsonResultOfImportApplicationProductsResponse {
  return (source ?? {}) as MarketJsonResultOfImportApplicationProductsResponse;
}
