import { MarketJsonResultOfDiscussion } from '../../models/market-json-result-of-discussion.interface';
import { ApiMarketJsonResultOfDiscussionDto } from '../../../swagger/models/api-market-json-result-of-discussion-dto';

export function adaptApiMarketJsonResultOfDiscussionDto(source?: MarketJsonResultOfDiscussion | null): ApiMarketJsonResultOfDiscussionDto {
  return (source ?? {}) as ApiMarketJsonResultOfDiscussionDto;
}
