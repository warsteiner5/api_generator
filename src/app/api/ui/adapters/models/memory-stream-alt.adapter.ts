import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';
import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';
import { streamAltAdapter } from './stream-alt.adapter';

export const memoryStreamAltAdapter = (source?: ApiMemoryStreamAltDto | null): MemoryStreamAlt => {
  return {
    ...streamAltAdapter(source as unknown as Parameters<typeof streamAltAdapter>[0]),
    canRead: source?.CanRead,
    canSeek: source?.CanSeek,
    canWrite: source?.CanWrite,
    capacity: source?.Capacity,
    length: source?.Length,
    position: source?.Position,
  };
}
