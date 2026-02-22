import { LongTermVolumeAlt } from '../../models/long-term-volume-alt.interface';
import { ApiLongTermVolumeAltDto } from '../../../swagger/models/api-long-term-volume';

export const apiLongTermVolumeAltDtoAdapter = (source?: LongTermVolumeAlt | null): ApiLongTermVolumeAltDto => {
  return {
    Sum: source?.sum,
    SummRub: source?.summRub,
    Year: source?.year,
  };
}
