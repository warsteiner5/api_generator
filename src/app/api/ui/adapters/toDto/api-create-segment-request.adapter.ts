import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { ApiCreateSegmentRequestAltDto } from '../../../swagger/models/api-create-segment-request';
import { adaptApiCharacteristicDto } from './api-characteristic-dto.adapter';

export function adaptApiCreateSegmentRequestAltDto(source?: CreateSegmentRequestAlt | null): ApiCreateSegmentRequestAltDto {
  return {
    CharacteristicsValues: (source?.characteristicsValues ?? []).map((item) => adaptApiCharacteristicDto(item)),
    Name: source?.name,
    Okpd2: source?.okpd2,
  };
}
