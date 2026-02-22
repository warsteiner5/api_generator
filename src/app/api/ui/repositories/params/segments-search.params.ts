import { SegmentSearchRequest } from '../../models/segment-search-request.interface';
import { SegmentsSearch$Params } from '../../../swagger/fn/segments/segments-search';
import { apiSegmentSearchRequestDtoAdapter } from '../../adapters/models/api-segment-search-request-dto.adapter';

// @ts-ignore
export interface SegmentsSearchParams {
  body?: SegmentSearchRequest;
}

export function segmentsSearchAdapter(params?: SegmentsSearchParams): SegmentsSearch$Params {
  if (!params) {
    return {} as SegmentsSearch$Params;
  }
  return {
      body: apiSegmentSearchRequestDtoAdapter(params.body),
  };
}
