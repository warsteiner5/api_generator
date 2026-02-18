import { SafeHandleAlt } from '../../models/safe-handle-alt.interface';
import { ApiSafeHandleAltDto } from '../../../swagger/models/api-safe-handle';

export function adaptApiSafeHandleAltDto(source?: SafeHandleAlt | null): ApiSafeHandleAltDto {
  return (source ?? {}) as ApiSafeHandleAltDto;
}
