import { SegmentInfo } from '../../models/segment-info.interface';
import { ApiSegmentInfoDto } from '../../../swagger/models/api-segment-info-dto';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';

export const apiSegmentInfoDtoAdapter = (source?: SegmentInfo | null): ApiSegmentInfoDto => {
  return {
    Characteristics: source?.characteristics?.map((item) => apiCharacteristicDtoAdapter(item)),
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
    Name: source?.name,
  };
}
