import { MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort } from '../../models/market-json-result-of-i-read-only-collection-of-quotation-session-application-short.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-quotation-session-application-short-dto';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto(source?: MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort | null): ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto;
}
