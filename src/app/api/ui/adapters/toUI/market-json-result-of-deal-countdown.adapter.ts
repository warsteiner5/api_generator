import { ApiMarketJsonResultOfDealCountdownDto } from '../../../swagger/models/api-market-json-result-of-deal-countdown-dto';
import { MarketJsonResultOfDealCountdown } from '../../models/market-json-result-of-deal-countdown.interface';

export function adaptMarketJsonResultOfDealCountdownToUI(source?: ApiMarketJsonResultOfDealCountdownDto | null): MarketJsonResultOfDealCountdown {
  return (source ?? {}) as MarketJsonResultOfDealCountdown;
}
