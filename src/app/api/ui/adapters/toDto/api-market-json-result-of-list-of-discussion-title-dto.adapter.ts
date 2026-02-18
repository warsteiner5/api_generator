import { MarketJsonResultOfListOfDiscussionTitle } from '../../models/market-json-result-of-list-of-discussion-title.interface';
import { ApiMarketJsonResultOfListOfDiscussionTitleDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-title-dto';

export function adaptApiMarketJsonResultOfListOfDiscussionTitleDto(source?: MarketJsonResultOfListOfDiscussionTitle | null): ApiMarketJsonResultOfListOfDiscussionTitleDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfDiscussionTitleDto;
}
