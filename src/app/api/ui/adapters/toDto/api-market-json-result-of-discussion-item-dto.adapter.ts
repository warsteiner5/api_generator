import { MarketJsonResultOfDiscussionItem } from '../../models/market-json-result-of-discussion-item.interface';
import { ApiMarketJsonResultOfDiscussionItemDto } from '../../../swagger/models/api-market-json-result-of-discussion-item-dto';

export function adaptApiMarketJsonResultOfDiscussionItemDto(source?: MarketJsonResultOfDiscussionItem | null): ApiMarketJsonResultOfDiscussionItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfDiscussionItemDto;
}
