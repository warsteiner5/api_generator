import { ApiLongTermVolumeAltDto } from '../../../swagger/models/api-long-term-volume';
import { LongTermVolumeAlt } from '../../models/long-term-volume-alt.interface';

export const longTermVolumeAltAdapter = (source?: ApiLongTermVolumeAltDto | null): LongTermVolumeAlt => {
  return {
    sum: source?.Sum,
    summRub: source?.SummRub,
    year: source?.Year,
  };
}
