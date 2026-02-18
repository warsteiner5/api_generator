import { ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-application-details-dto';
import { MarketJsonResultOfQuotationSessionApplicationDetails } from '../../models/market-json-result-of-quotation-session-application-details.interface';

export function adaptMarketJsonResultOfQuotationSessionApplicationDetailsToUI(source?: ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto | null): MarketJsonResultOfQuotationSessionApplicationDetails {
  return (source ?? {}) as MarketJsonResultOfQuotationSessionApplicationDetails;
}
