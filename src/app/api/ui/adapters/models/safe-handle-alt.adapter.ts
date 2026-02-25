import { ApiSafeHandleAltDto } from '../../../swagger/models/api-safe-handle';
import { SafeHandleAlt } from '../../models/safe-handle-alt.interface';
import { criticalFinalizerObjectAltAdapter } from './critical-finalizer-object-alt.adapter';

export const safeHandleAltAdapter = (source?: ApiSafeHandleAltDto | null): SafeHandleAlt => {
  return {
    ...criticalFinalizerObjectAltAdapter(source as unknown as Parameters<typeof criticalFinalizerObjectAltAdapter>[0]),
    isClosed: source?.IsClosed,
  };
}
