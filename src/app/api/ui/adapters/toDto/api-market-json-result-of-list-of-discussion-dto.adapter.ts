import { MarketJsonResultOfListOfDiscussion } from '../../models/market-json-result-of-list-of-discussion.interface';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../../swagger/models/api-market-json-result-of-list-of-discussion-dto';

export function adaptApiMarketJsonResultOfListOfDiscussionDto(source?: MarketJsonResultOfListOfDiscussion | null): ApiMarketJsonResultOfListOfDiscussionDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfDiscussionDto;
}
