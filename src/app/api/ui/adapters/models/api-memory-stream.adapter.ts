import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';
import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';

export const apiMemoryStreamAltDtoAdapter = (source?: MemoryStreamAlt | null): ApiMemoryStreamAltDto => {
  return (source ?? {}) as ApiMemoryStreamAltDto;
}
