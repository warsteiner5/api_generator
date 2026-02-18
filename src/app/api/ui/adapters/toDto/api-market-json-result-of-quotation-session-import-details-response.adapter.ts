import { MarketJsonResultOfQuotationSessionImportDetailsResponse } from '../../models/market-json-result-of-quotation-session-import-details-response.interface';
import { ApiMarketJsonResultOfQuotationSessionImportDetailsResponse } from '../../../swagger/models/api-market-json-result-of-quotation-session-import-details-response';

export function adaptApiMarketJsonResultOfQuotationSessionImportDetailsResponse(source?: MarketJsonResultOfQuotationSessionImportDetailsResponse | null): ApiMarketJsonResultOfQuotationSessionImportDetailsResponse {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSessionImportDetailsResponse;
}
