import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-item-dto';
import { MarketJsonResultOfListOfDiscussionItem } from '../../models/market-json-result-of-list-of-discussion-item.interface';

export function adaptMarketJsonResultOfListOfDiscussionItemToUI(source?: ApiMarketJsonResultOfListOfDiscussionItemDto | null): MarketJsonResultOfListOfDiscussionItem {
  return (source ?? {}) as MarketJsonResultOfListOfDiscussionItem;
}
