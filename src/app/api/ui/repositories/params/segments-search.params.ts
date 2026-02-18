import { SegmentSearchRequest } from '../../models/segment-search-request.interface';
import { SegmentsSearch$Params } from '../../../swagger/fn/segments/segments-search';
import { adaptApiSegmentSearchRequestDto } from '../../adapters/toDto/api-segment-search-request-dto.adapter';

export interface SegmentsSearchParams {
  body?: SegmentSearchRequest;
}

export const segmentsSearchParamsAdapter = {
  adapt(params?: SegmentsSearchParams): SegmentsSearch$Params {
    if (!params) {
      return {} as SegmentsSearch$Params;
    }
    return {
      body: adaptApiSegmentSearchRequestDto(params.body),
    };
  }
};
