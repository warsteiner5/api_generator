import { ApiSegmentSearchResultDto } from '../../../swagger/models/api-segment-search-result-dto';
import { SegmentSearchResult } from '../../models/segment-search-result.interface';

export function adaptSegmentSearchResultToUI(source?: ApiSegmentSearchResultDto | null): SegmentSearchResult {
  return {
    equivalentsCount: source?.EquivalentsCount ?? 0,
    id: source?.Id ?? 0,
    lastModificationDate: source?.LastModificationDate ?? '',
    name: source?.Name ?? '',
  };
}
