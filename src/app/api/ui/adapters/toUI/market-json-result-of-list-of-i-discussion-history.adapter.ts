import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-i-discussion-history-dto';
import { MarketJsonResultOfListOfIDiscussionHistory } from '../../models/market-json-result-of-list-of-i-discussion-history.interface';

export function adaptMarketJsonResultOfListOfIDiscussionHistoryToUI(source?: ApiMarketJsonResultOfListOfIDiscussionHistoryDto | null): MarketJsonResultOfListOfIDiscussionHistory {
  return (source ?? {}) as MarketJsonResultOfListOfIDiscussionHistory;
}
