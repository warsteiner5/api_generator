import { SegmentSearchRequest } from '../../models/segment-search-request.interface';
import { SegmentsGetByName$Params } from '../../../swagger/fn/segments/segments-get-by-name';
import { apiSegmentSearchRequestDtoAdapter } from '../../adapters/models/api-segment-search-request-dto.adapter';

// @ts-ignore
export interface SegmentsGetByNameParams {
  body?: SegmentSearchRequest;
}

export function segmentsGetByNameAdapter(params?: SegmentsGetByNameParams): SegmentsGetByName$Params {
  if (!params) {
    return {} as SegmentsGetByName$Params;
  }
  return {
      body: apiSegmentSearchRequestDtoAdapter(params.body),
  };
}
