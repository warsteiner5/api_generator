import { StreamAlt } from './stream-alt.interface';

export type MemoryStreamAlt = StreamAlt & { 'CanRead'?: boolean; 'CanSeek'?: boolean; 'CanWrite'?: boolean; 'Capacity'?: number; 'Length'?: number; 'Position'?: number; };
