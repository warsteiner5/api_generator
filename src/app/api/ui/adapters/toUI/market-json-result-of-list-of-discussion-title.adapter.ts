import { ApiMarketJsonResultOfListOfDiscussionTitleDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-title-dto';
import { MarketJsonResultOfListOfDiscussionTitle } from '../../models/market-json-result-of-list-of-discussion-title.interface';

export function adaptMarketJsonResultOfListOfDiscussionTitleToUI(source?: ApiMarketJsonResultOfListOfDiscussionTitleDto | null): MarketJsonResultOfListOfDiscussionTitle {
  return (source ?? {}) as MarketJsonResultOfListOfDiscussionTitle;
}
