import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';
import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';

export function adaptMemoryStreamAltToUI(source?: ApiMemoryStreamAltDto | null): MemoryStreamAlt {
  return (source ?? {}) as MemoryStreamAlt;
}
