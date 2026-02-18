import { StreamAlt } from '../../models/stream-alt.interface';
import { ApiStreamAltDto } from '../../../swagger/models/api-stream';

export function adaptApiStreamAltDto(source?: StreamAlt | null): ApiStreamAltDto {
  return (source ?? {}) as ApiStreamAltDto;
}
