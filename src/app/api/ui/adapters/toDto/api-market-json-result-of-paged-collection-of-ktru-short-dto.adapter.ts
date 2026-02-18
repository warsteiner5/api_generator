import { MarketJsonResultOfPagedCollectionOfKtruShort } from '../../models/market-json-result-of-paged-collection-of-ktru-short.interface';
import { ApiMarketJsonResultOfPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-ktru-short-dto';

export function adaptApiMarketJsonResultOfPagedCollectionOfKtruShortDto(source?: MarketJsonResultOfPagedCollectionOfKtruShort | null): ApiMarketJsonResultOfPagedCollectionOfKtruShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfPagedCollectionOfKtruShortDto;
}
