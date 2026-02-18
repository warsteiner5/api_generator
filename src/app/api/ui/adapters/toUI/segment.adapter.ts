import { ApiSegmentDto } from '../../../swagger/models/api-segment-dto';
import { Segment } from '../../models/segment.interface';

export function adaptSegmentToUI(source?: ApiSegmentDto | null): Segment {
  return {
    characteristicsCount: source?.CharacteristicsCount ?? 0,
    equivalentsCount: source?.EquivalentsCount ?? 0,
    id: source?.Id ?? 0,
    lastModificationDate: source?.LastModificationDate ?? '',
    name: source?.Name ?? '',
  };
}
