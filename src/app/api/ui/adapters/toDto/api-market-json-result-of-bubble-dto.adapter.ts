import { MarketJsonResultOfBubble } from '../../models/market-json-result-of-bubble.interface';
import { ApiMarketJsonResultOfBubbleDto } from '../../../swagger/models/api-market-json-result-of-bubble-dto';

export function adaptApiMarketJsonResultOfBubbleDto(source?: MarketJsonResultOfBubble | null): ApiMarketJsonResultOfBubbleDto {
  return (source ?? {}) as ApiMarketJsonResultOfBubbleDto;
}
