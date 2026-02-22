import { ApiSegmentDto } from '../../../swagger/models/api-segment-dto';
import { Segment } from '../../models/segment.interface';

export const segmentAdapter = (source?: ApiSegmentDto | null): Segment => {
  return {
    characteristicsCount: source?.CharacteristicsCount,
    equivalentsCount: source?.EquivalentsCount,
    id: source?.Id,
    lastModificationDate: source?.LastModificationDate,
    name: source?.Name,
  };
}
