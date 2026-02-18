import { MarketJsonResultOfQuotationSessionApplicationDetails } from '../../models/market-json-result-of-quotation-session-application-details.interface';
import { ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-application-details-dto';

export function adaptApiMarketJsonResultOfQuotationSessionApplicationDetailsDto(source?: MarketJsonResultOfQuotationSessionApplicationDetails | null): ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto;
}
