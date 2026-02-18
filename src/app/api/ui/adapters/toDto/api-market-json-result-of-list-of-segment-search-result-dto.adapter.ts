import { MarketJsonResultOfListOfSegmentSearchResult } from '../../models/market-json-result-of-list-of-segment-search-result.interface';
import { ApiMarketJsonResultOfListOfSegmentSearchResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-segment-search-result-dto';

export function adaptApiMarketJsonResultOfListOfSegmentSearchResultDto(source?: MarketJsonResultOfListOfSegmentSearchResult | null): ApiMarketJsonResultOfListOfSegmentSearchResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfSegmentSearchResultDto;
}
