import { ApiMarketJsonResultOfDiscussionItemDtoOf } from '../../../swagger/models/api-market-json-result-of-discussion-item-dto-of';
import { MarketJsonResultOfDiscussionItemDtoOf } from '../../models/market-json-result-of-discussion-item-dto-of.interface';

export function adaptMarketJsonResultOfDiscussionItemDtoOfToUI(source?: ApiMarketJsonResultOfDiscussionItemDtoOf | null): MarketJsonResultOfDiscussionItemDtoOf {
  return (source ?? {}) as MarketJsonResultOfDiscussionItemDtoOf;
}
