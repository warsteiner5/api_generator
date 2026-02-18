import { ApiMarketJsonResultOfPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-ktru-short-dto';
import { MarketJsonResultOfPagedCollectionOfKtruShort } from '../../models/market-json-result-of-paged-collection-of-ktru-short.interface';

export function adaptMarketJsonResultOfPagedCollectionOfKtruShortToUI(source?: ApiMarketJsonResultOfPagedCollectionOfKtruShortDto | null): MarketJsonResultOfPagedCollectionOfKtruShort {
  return (source ?? {}) as MarketJsonResultOfPagedCollectionOfKtruShort;
}
