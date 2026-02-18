import { ApiCreateSegmentRequestAltDto } from '../../../swagger/models/api-create-segment-request';
import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { adaptCharacteristicToUI } from './characteristic.adapter';

export function adaptCreateSegmentRequestAltToUI(source?: ApiCreateSegmentRequestAltDto | null): CreateSegmentRequestAlt {
  return {
    characteristicsValues: (source?.CharacteristicsValues ?? []).map((item) => adaptCharacteristicToUI(item)),
    name: source?.Name ?? '',
    okpd2: source?.Okpd2 ?? '',
  };
}
