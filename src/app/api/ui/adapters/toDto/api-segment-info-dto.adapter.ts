import { SegmentInfo } from '../../models/segment-info.interface';
import { ApiSegmentInfoDto } from '../../../swagger/models/api-segment-info-dto';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';

export function adaptApiSegmentInfoDto(source?: SegmentInfo | null): ApiSegmentInfoDto {
  return {
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiCharacteristicDto(item)),
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
    Name: source?.name,
  };
}
