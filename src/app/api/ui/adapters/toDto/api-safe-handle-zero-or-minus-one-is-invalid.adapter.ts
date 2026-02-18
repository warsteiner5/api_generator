import { SafeHandleZeroOrMinusOneIsInvalidAlt } from '../../models/safe-handle-zero-or-minus-one-is-invalid-alt.interface';
import { ApiSafeHandleZeroOrMinusOneIsInvalidAltDto } from '../../../swagger/models/api-safe-handle-zero-or-minus-one-is-invalid';

export function adaptApiSafeHandleZeroOrMinusOneIsInvalidAltDto(source?: SafeHandleZeroOrMinusOneIsInvalidAlt | null): ApiSafeHandleZeroOrMinusOneIsInvalidAltDto {
  return (source ?? {}) as ApiSafeHandleZeroOrMinusOneIsInvalidAltDto;
}
