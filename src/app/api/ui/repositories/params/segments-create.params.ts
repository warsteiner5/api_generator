import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { SegmentsCreate$Params } from '../../../swagger/fn/segments/segments-create';
import { apiCreateSegmentRequestAltDtoAdapter } from '../../adapters/models/api-create-segment-request.adapter';

// @ts-ignore
export interface SegmentsCreateParams {
  body?: CreateSegmentRequestAlt;
}

export function segmentsCreateAdapter(params?: SegmentsCreateParams): SegmentsCreate$Params {
  if (!params) {
    return {} as SegmentsCreate$Params;
  }
  return {
      body: apiCreateSegmentRequestAltDtoAdapter(params.body),
  };
}
