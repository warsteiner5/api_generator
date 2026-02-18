import { ApiSegmentInfoDto } from '../../../swagger/models/api-segment-info-dto';
import { SegmentInfo } from '../../models/segment-info.interface';
import { adaptCharacteristicToUI } from './characteristic.adapter';

export function adaptSegmentInfoToUI(source?: ApiSegmentInfoDto | null): SegmentInfo {
  return {
    characteristics: (source?.Characteristics ?? []).map((item) => adaptCharacteristicToUI(item)),
    id: source?.Id ?? 0,
    lastModificationDate: source?.LastModificationDate ?? '',
    name: source?.Name ?? '',
  };
}
