import { ApiSegmentSearchResultDto } from '../../../swagger/models/api-segment-search-result-dto';
import { SegmentSearchResult } from '../../models/segment-search-result.interface';

export const segmentSearchResultAdapter = (source?: ApiSegmentSearchResultDto | null): SegmentSearchResult => {
  return {
    equivalentsCount: source?.EquivalentsCount,
    id: source?.Id,
    lastModificationDate: source?.LastModificationDate,
    name: source?.Name,
  };
}
