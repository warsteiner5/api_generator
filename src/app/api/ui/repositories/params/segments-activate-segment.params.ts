import { ActivateSegmentRequestAlt } from '../../models/activate-segment-request-alt.interface';
import { SegmentsActivateSegment$Params } from '../../../swagger/fn/segments/segments-activate-segment';
import { apiActivateSegmentRequestAltDtoAdapter } from '../../adapters/models/api-activate-segment-request.adapter';

// @ts-ignore
export interface SegmentsActivateSegmentParams {
  body?: ActivateSegmentRequestAlt;
}

export function segmentsActivateSegmentAdapter(params?: SegmentsActivateSegmentParams): SegmentsActivateSegment$Params {
  if (!params) {
    return {} as SegmentsActivateSegment$Params;
  }
  return {
      body: apiActivateSegmentRequestAltDtoAdapter(params.body),
  };
}
