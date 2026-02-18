import { ApiSegmentSearchRequestDto } from '../../../swagger/models/api-segment-search-request-dto';
import { SegmentSearchRequest } from '../../models/segment-search-request.interface';

export function adaptSegmentSearchRequestToUI(source?: ApiSegmentSearchRequestDto | null): SegmentSearchRequest {
  return {
    okpd2: source?.Okpd2 ?? '',
    segmentName: source?.SegmentName ?? '',
    take: source?.Take ?? 0,
  };
}
