import { Segment } from '../../models/segment.interface';
import { ApiSegmentDto } from '../../../swagger/models/api-segment-dto';

export const apiSegmentDtoAdapter = (source?: Segment | null): ApiSegmentDto => {
  return {
    CharacteristicsCount: source?.characteristicsCount,
    EquivalentsCount: source?.equivalentsCount,
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
    Name: source?.name,
  };
}
