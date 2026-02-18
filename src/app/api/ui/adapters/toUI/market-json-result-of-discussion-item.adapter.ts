import { ApiMarketJsonResultOfDiscussionItemDto } from '../../../swagger/models/api-market-json-result-of-discussion-item-dto';
import { MarketJsonResultOfDiscussionItem } from '../../models/market-json-result-of-discussion-item.interface';

export function adaptMarketJsonResultOfDiscussionItemToUI(source?: ApiMarketJsonResultOfDiscussionItemDto | null): MarketJsonResultOfDiscussionItem {
  return (source ?? {}) as MarketJsonResultOfDiscussionItem;
}
