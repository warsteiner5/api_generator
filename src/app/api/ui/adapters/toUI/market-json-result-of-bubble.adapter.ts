import { ApiMarketJsonResultOfBubbleDto } from '../../../swagger/models/api-market-json-result-of-bubble-dto';
import { MarketJsonResultOfBubble } from '../../models/market-json-result-of-bubble.interface';

export function adaptMarketJsonResultOfBubbleToUI(source?: ApiMarketJsonResultOfBubbleDto | null): MarketJsonResultOfBubble {
  return (source ?? {}) as MarketJsonResultOfBubble;
}
