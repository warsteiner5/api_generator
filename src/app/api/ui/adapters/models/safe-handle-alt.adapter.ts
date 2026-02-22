import { ApiSafeHandleAltDto } from '../../../swagger/models/api-safe-handle';
import { SafeHandleAlt } from '../../models/safe-handle-alt.interface';

export const safeHandleAltAdapter = (source?: ApiSafeHandleAltDto | null): SafeHandleAlt => {
  return (source ?? {}) as SafeHandleAlt;
}
