import { ApiCreateSegmentRequestAltDto } from '../../../swagger/models/api-create-segment-request';
import { CreateSegmentRequestAlt } from '../../models/create-segment-request-alt.interface';
import { characteristicAdapter } from './characteristic.adapter';

export const createSegmentRequestAltAdapter = (source?: ApiCreateSegmentRequestAltDto | null): CreateSegmentRequestAlt => {
  return {
    characteristicsValues: source?.CharacteristicsValues?.map((item) => characteristicAdapter(item)),
    name: source?.Name,
    okpd2: source?.Okpd2,
  };
}
