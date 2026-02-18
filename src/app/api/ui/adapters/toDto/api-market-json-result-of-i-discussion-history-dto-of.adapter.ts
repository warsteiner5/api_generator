import { MarketJsonResultOfIDiscussionHistoryDtoOf } from '../../models/market-json-result-of-i-discussion-history-dto-of.interface';
import { ApiMarketJsonResultOfIDiscussionHistoryDtoOf } from '../../../swagger/models/api-market-json-result-of-i-discussion-history-dto-of';

export function adaptApiMarketJsonResultOfIDiscussionHistoryDtoOf(source?: MarketJsonResultOfIDiscussionHistoryDtoOf | null): ApiMarketJsonResultOfIDiscussionHistoryDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfIDiscussionHistoryDtoOf;
}
