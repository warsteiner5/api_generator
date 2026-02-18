import { MarketJsonResultOfListOfIDiscussionHistory } from '../../models/market-json-result-of-list-of-i-discussion-history.interface';
import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-i-discussion-history-dto';

export function adaptApiMarketJsonResultOfListOfIDiscussionHistoryDto(source?: MarketJsonResultOfListOfIDiscussionHistory | null): ApiMarketJsonResultOfListOfIDiscussionHistoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfIDiscussionHistoryDto;
}
