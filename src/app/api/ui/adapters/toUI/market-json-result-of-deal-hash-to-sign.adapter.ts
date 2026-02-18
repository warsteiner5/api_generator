import { ApiMarketJsonResultOfDealHashToSignDto } from '../../../swagger/models/api-market-json-result-of-deal-hash-to-sign-dto';
import { MarketJsonResultOfDealHashToSign } from '../../models/market-json-result-of-deal-hash-to-sign.interface';

export function adaptMarketJsonResultOfDealHashToSignToUI(source?: ApiMarketJsonResultOfDealHashToSignDto | null): MarketJsonResultOfDealHashToSign {
  return (source ?? {}) as MarketJsonResultOfDealHashToSign;
}
