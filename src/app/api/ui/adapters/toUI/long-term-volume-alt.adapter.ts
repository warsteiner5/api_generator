import { ApiLongTermVolumeAltDto } from '../../../swagger/models/api-long-term-volume';
import { LongTermVolumeAlt } from '../../models/long-term-volume-alt.interface';

export function adaptLongTermVolumeAltToUI(source?: ApiLongTermVolumeAltDto | null): LongTermVolumeAlt {
  return {
    sum: source?.Sum ?? 0,
    summRub: source?.SummRub ?? 0,
    year: source?.Year ?? 0,
  };
}
