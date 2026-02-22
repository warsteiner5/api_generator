import { SegmentSearchResult } from '../../models/segment-search-result.interface';
import { ApiSegmentSearchResultDto } from '../../../swagger/models/api-segment-search-result-dto';

export const apiSegmentSearchResultDtoAdapter = (source?: SegmentSearchResult | null): ApiSegmentSearchResultDto => {
  return {
    EquivalentsCount: source?.equivalentsCount,
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
    Name: source?.name,
  };
}
