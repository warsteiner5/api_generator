import { StreamAlt } from '../../models/stream-alt.interface';
import { ApiStreamAltDto } from '../../../swagger/models/api-stream';

export const apiStreamAltDtoAdapter = (source?: StreamAlt | null): ApiStreamAltDto => {
  return (source ?? {}) as ApiStreamAltDto;
}
