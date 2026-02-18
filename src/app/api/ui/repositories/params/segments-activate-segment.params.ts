import { ActivateSegmentRequestAlt } from '../../models/activate-segment-request-alt.interface';
import { SegmentsActivateSegment$Params } from '../../../swagger/fn/segments/segments-activate-segment';
import { adaptApiActivateSegmentRequestAltDto } from '../../adapters/toDto/api-activate-segment-request.adapter';

export interface SegmentsActivateSegmentParams {
  body?: ActivateSegmentRequestAlt;
}

export const segmentsActivateSegmentParamsAdapter = {
  adapt(params?: SegmentsActivateSegmentParams): SegmentsActivateSegment$Params {
    if (!params) {
      return {} as SegmentsActivateSegment$Params;
    }
    return {
      body: adaptApiActivateSegmentRequestAltDto(params.body),
    };
  }
};
