import { MarketJsonResultOfTelegramUrl } from '../../models/market-json-result-of-telegram-url.interface';
import { ApiMarketJsonResultOfTelegramUrl } from '../../../swagger/models/api-market-json-result-of-telegram-url';

export function adaptApiMarketJsonResultOfTelegramUrl(source?: MarketJsonResultOfTelegramUrl | null): ApiMarketJsonResultOfTelegramUrl {
  return (source ?? {}) as ApiMarketJsonResultOfTelegramUrl;
}
