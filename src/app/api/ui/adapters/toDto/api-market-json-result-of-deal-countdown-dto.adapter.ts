import { MarketJsonResultOfDealCountdown } from '../../models/market-json-result-of-deal-countdown.interface';
import { ApiMarketJsonResultOfDealCountdownDto } from '../../../swagger/models/api-market-json-result-of-deal-countdown-dto';

export function adaptApiMarketJsonResultOfDealCountdownDto(source?: MarketJsonResultOfDealCountdown | null): ApiMarketJsonResultOfDealCountdownDto {
  return (source ?? {}) as ApiMarketJsonResultOfDealCountdownDto;
}
