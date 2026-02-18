import { ApiMarketJsonResultOfKtruDto } from '../../../swagger/models/api-market-json-result-of-ktru-dto';
import { MarketJsonResultOfKtru } from '../../models/market-json-result-of-ktru.interface';

export function adaptMarketJsonResultOfKtruToUI(source?: ApiMarketJsonResultOfKtruDto | null): MarketJsonResultOfKtru {
  return (source ?? {}) as MarketJsonResultOfKtru;
}
