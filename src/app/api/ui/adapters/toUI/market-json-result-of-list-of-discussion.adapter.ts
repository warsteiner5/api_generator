import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-dto';
import { MarketJsonResultOfListOfDiscussion } from '../../models/market-json-result-of-list-of-discussion.interface';

export function adaptMarketJsonResultOfListOfDiscussionToUI(source?: ApiMarketJsonResultOfListOfDiscussionDto | null): MarketJsonResultOfListOfDiscussion {
  return (source ?? {}) as MarketJsonResultOfListOfDiscussion;
}
