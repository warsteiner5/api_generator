import { ApiMarketJsonResultOfTelegramUrl } from '../../../swagger/models/api-market-json-result-of-telegram-url';
import { MarketJsonResultOfTelegramUrl } from '../../models/market-json-result-of-telegram-url.interface';

export function adaptMarketJsonResultOfTelegramUrlToUI(source?: ApiMarketJsonResultOfTelegramUrl | null): MarketJsonResultOfTelegramUrl {
  return (source ?? {}) as MarketJsonResultOfTelegramUrl;
}
