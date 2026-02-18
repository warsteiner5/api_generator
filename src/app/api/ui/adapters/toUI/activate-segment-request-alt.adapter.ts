import { ApiActivateSegmentRequestAltDto } from '../../../swagger/models/api-activate-segment-request';
import { ActivateSegmentRequestAlt } from '../../models/activate-segment-request-alt.interface';

export function adaptActivateSegmentRequestAltToUI(source?: ApiActivateSegmentRequestAltDto | null): ActivateSegmentRequestAlt {
  return {
    segmentId: source?.SegmentId ?? 0,
    segmentName: source?.SegmentName ?? '',
  };
}
