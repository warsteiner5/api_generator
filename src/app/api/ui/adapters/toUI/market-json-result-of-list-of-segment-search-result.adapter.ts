import { ApiMarketJsonResultOfListOfSegmentSearchResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-segment-search-result-dto';
import { MarketJsonResultOfListOfSegmentSearchResult } from '../../models/market-json-result-of-list-of-segment-search-result.interface';

export function adaptMarketJsonResultOfListOfSegmentSearchResultToUI(source?: ApiMarketJsonResultOfListOfSegmentSearchResultDto | null): MarketJsonResultOfListOfSegmentSearchResult {
  return (source ?? {}) as MarketJsonResultOfListOfSegmentSearchResult;
}
