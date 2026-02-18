import { ApiMarketJsonResultOfQuotationSessionImportDetailsResponse } from '../../../swagger/models/api-market-json-result-of-quotation-session-import-details-response';
import { MarketJsonResultOfQuotationSessionImportDetailsResponse } from '../../models/market-json-result-of-quotation-session-import-details-response.interface';

export function adaptMarketJsonResultOfQuotationSessionImportDetailsResponseToUI(source?: ApiMarketJsonResultOfQuotationSessionImportDetailsResponse | null): MarketJsonResultOfQuotationSessionImportDetailsResponse {
  return (source ?? {}) as MarketJsonResultOfQuotationSessionImportDetailsResponse;
}
