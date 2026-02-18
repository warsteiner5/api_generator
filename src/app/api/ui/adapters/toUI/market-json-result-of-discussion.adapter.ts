import { ApiMarketJsonResultOfDiscussionDto } from '../../../swagger/models/api-market-json-result-of-discussion-dto';
import { MarketJsonResultOfDiscussion } from '../../models/market-json-result-of-discussion.interface';

export function adaptMarketJsonResultOfDiscussionToUI(source?: ApiMarketJsonResultOfDiscussionDto | null): MarketJsonResultOfDiscussion {
  return (source ?? {}) as MarketJsonResultOfDiscussion;
}
