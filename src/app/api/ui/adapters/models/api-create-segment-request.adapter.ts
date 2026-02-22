import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { ApiCreateSegmentRequestAltDto } from '../../../swagger/models/api-create-segment-request';
import { apiCharacteristicDtoAdapter } from './api-characteristic-dto.adapter';

export const apiCreateSegmentRequestAltDtoAdapter = (source?: CreateSegmentRequestAlt | null): ApiCreateSegmentRequestAltDto => {
  return {
    CharacteristicsValues: source?.characteristicsValues?.map((item) => apiCharacteristicDtoAdapter(item)),
    Name: source?.name,
    Okpd2: source?.okpd2,
  };
}
