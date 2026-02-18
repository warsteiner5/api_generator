import { SegmentSearchRequest } from '../../models/segment-search-request.interface';
import { SegmentsGetByName$Params } from '../../../swagger/fn/segments/segments-get-by-name';
import { adaptApiSegmentSearchRequestDto } from '../../adapters/toDto/api-segment-search-request-dto.adapter';

export interface SegmentsGetByNameParams {
  body?: SegmentSearchRequest;
}

export const segmentsGetByNameParamsAdapter = {
  adapt(params?: SegmentsGetByNameParams): SegmentsGetByName$Params {
    if (!params) {
      return {} as SegmentsGetByName$Params;
    }
    return {
      body: adaptApiSegmentSearchRequestDto(params.body),
    };
  }
};
