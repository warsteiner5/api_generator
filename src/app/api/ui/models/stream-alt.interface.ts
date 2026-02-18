import { MarshalByRefObjectAlt } from './marshal-by-ref-object-alt.interface';

export type StreamAlt = MarshalByRefObjectAlt & { 'CanTimeout'?: boolean; 'ReadTimeout'?: number; 'WriteTimeout'?: number; };
