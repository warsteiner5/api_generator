import { MemoryStreamAlt } from '../../models/memory-stream-alt.interface';
import { ApiMemoryStreamAltDto } from '../../../swagger/models/api-memory-stream';
import { apiStreamAltDtoAdapter } from './api-stream.adapter';

export const apiMemoryStreamAltDtoAdapter = (source?: MemoryStreamAlt | null): ApiMemoryStreamAltDto => {
  return {
    ...apiStreamAltDtoAdapter(source as unknown as Parameters<typeof apiStreamAltDtoAdapter>[0]),
    CanRead: source?.canRead,
    CanSeek: source?.canSeek,
    CanWrite: source?.canWrite,
    Capacity: source?.capacity,
    Length: source?.length,
    Position: source?.position,
  };
}
