import { CriticalFinalizerObjectAlt } from './critical-finalizer-object-alt.interface';

// @ts-ignore
export interface SafeHandleAlt extends CriticalFinalizerObjectAlt {
  isClosed: boolean;
}
