import { MarketJsonResultOfDiscussionItemDtoOf } from '../../models/market-json-result-of-discussion-item-dto-of.interface';
import { ApiMarketJsonResultOfDiscussionItemDtoOf } from '../../../swagger/models/api-market-json-result-of-discussion-item-dto-of';

export function adaptApiMarketJsonResultOfDiscussionItemDtoOf(source?: MarketJsonResultOfDiscussionItemDtoOf | null): ApiMarketJsonResultOfDiscussionItemDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfDiscussionItemDtoOf;
}
