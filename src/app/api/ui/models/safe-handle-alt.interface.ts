import { CriticalFinalizerObjectAlt } from './critical-finalizer-object-alt.interface';

export type SafeHandleAlt = CriticalFinalizerObjectAlt & { 'IsClosed'?: boolean; };
