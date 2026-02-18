import { SegmentSearchRequest } from '../../models/segment-search-request.interface';
import { ApiSegmentSearchRequestDto } from '../../../swagger/models/api-segment-search-request-dto';

export function adaptApiSegmentSearchRequestDto(source?: SegmentSearchRequest | null): ApiSegmentSearchRequestDto {
  return {
    Okpd2: source?.okpd2,
    SegmentName: source?.segmentName,
    Take: source?.take,
  };
}
