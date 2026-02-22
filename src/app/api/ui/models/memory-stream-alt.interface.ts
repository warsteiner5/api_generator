import { StreamAlt } from './stream-alt.interface';

// @ts-ignore
export interface MemoryStreamAlt extends StreamAlt {
  canRead: boolean;
  canSeek: boolean;
  canWrite: boolean;
  capacity: number;
  length: number;
  position: number;
}
