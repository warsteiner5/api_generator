import { ActivateSegmentRequestAlt } from '../../models/activate-segment-request-alt.interface';
import { ApiActivateSegmentRequestAltDto } from '../../../swagger/models/api-activate-segment-request';

export function adaptApiActivateSegmentRequestAltDto(source?: ActivateSegmentRequestAlt | null): ApiActivateSegmentRequestAltDto {
  return {
    SegmentId: source?.segmentId,
    SegmentName: source?.segmentName,
  };
}
