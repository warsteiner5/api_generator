import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';
import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';

export function adaptApiMemoryStreamAltDto(source?: MemoryStreamAlt | null): ApiMemoryStreamAltDto {
  return (source ?? {}) as ApiMemoryStreamAltDto;
}
