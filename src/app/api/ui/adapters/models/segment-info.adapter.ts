import { ApiSegmentInfoDto } from '../../../swagger/models/api-segment-info-dto';
import { SegmentInfo } from '../../models/segment-info.interface';
import { characteristicAdapter } from './characteristic.adapter';

export const segmentInfoAdapter = (source?: ApiSegmentInfoDto | null): SegmentInfo => {
  return {
    characteristics: source?.Characteristics?.map((item) => characteristicAdapter(item)),
    id: source?.Id,
    lastModificationDate: source?.LastModificationDate,
    name: source?.Name,
  };
}
