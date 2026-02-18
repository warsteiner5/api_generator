import { ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-quotation-session-application-short-dto';
import { MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort } from '../../models/market-json-result-of-i-read-only-collection-of-quotation-session-application-short.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShortDto | null): MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfQuotationSessionApplicationShort;
}
