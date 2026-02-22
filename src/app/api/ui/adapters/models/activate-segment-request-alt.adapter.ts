import { ApiActivateSegmentRequestAltDto } from '../../../swagger/models/api-activate-segment-request';
import { ActivateSegmentRequestAlt } from '../../models/activate-segment-request-alt.interface';

export const activateSegmentRequestAltAdapter = (source?: ApiActivateSegmentRequestAltDto | null): ActivateSegmentRequestAlt => {
  return {
    segmentId: source?.SegmentId,
    segmentName: source?.SegmentName,
  };
}
