import { MarshalByRefObjectAlt } from './marshal-by-ref-object-alt.interface';

// @ts-ignore
export interface StreamAlt extends MarshalByRefObjectAlt {
  canTimeout: boolean;
  readTimeout: number;
  writeTimeout: number;
}
