import { SafeHandleAlt } from '../../models/safe-handle-alt.interface';
import { ApiSafeHandleAltDto } from '../../../swagger/models/api-safe-handle';
import { apiCriticalFinalizerObjectAltDtoAdapter } from './api-critical-finalizer-object.adapter';

export const apiSafeHandleAltDtoAdapter = (source?: SafeHandleAlt | null): ApiSafeHandleAltDto => {
  return {
    ...apiCriticalFinalizerObjectAltDtoAdapter(source as unknown as Parameters<typeof apiCriticalFinalizerObjectAltDtoAdapter>[0]),
    IsClosed: source?.isClosed,
  };
}
