import { ApiMarketJsonResultOfIDiscussionHistoryDtoOf } from '../../../swagger/models/api-market-json-result-of-i-discussion-history-dto-of';
import { MarketJsonResultOfIDiscussionHistoryDtoOf } from '../../models/market-json-result-of-i-discussion-history-dto-of.interface';

export function adaptMarketJsonResultOfIDiscussionHistoryDtoOfToUI(source?: ApiMarketJsonResultOfIDiscussionHistoryDtoOf | null): MarketJsonResultOfIDiscussionHistoryDtoOf {
  return (source ?? {}) as MarketJsonResultOfIDiscussionHistoryDtoOf;
}
