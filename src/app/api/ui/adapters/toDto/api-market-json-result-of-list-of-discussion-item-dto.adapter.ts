import { MarketJsonResultOfListOfDiscussionItem } from '../../models/market-json-result-of-list-of-discussion-item.interface';
import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-item-dto';

export function adaptApiMarketJsonResultOfListOfDiscussionItemDto(source?: MarketJsonResultOfListOfDiscussionItem | null): ApiMarketJsonResultOfListOfDiscussionItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfDiscussionItemDto;
}
