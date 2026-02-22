import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';
import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';

export const memoryStreamAltAdapter = (source?: ApiMemoryStreamAltDto | null): MemoryStreamAlt => {
  return (source ?? {}) as MemoryStreamAlt;
}
