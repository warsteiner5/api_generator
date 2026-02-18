import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { SegmentsCreate$Params } from '../../../swagger/fn/segments/segments-create';
import { adaptApiCreateSegmentRequestAltDto } from '../../adapters/toDto/api-create-segment-request.adapter';

export interface SegmentsCreateParams {
  body?: CreateSegmentRequestAlt;
}

export const segmentsCreateParamsAdapter = {
  adapt(params?: SegmentsCreateParams): SegmentsCreate$Params {
    if (!params) {
      return {} as SegmentsCreate$Params;
    }
    return {
      body: adaptApiCreateSegmentRequestAltDto(params.body),
    };
  }
};
