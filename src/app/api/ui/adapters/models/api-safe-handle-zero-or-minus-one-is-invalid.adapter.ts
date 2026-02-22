import { SafeHandleZeroOrMinusOneIsInvalidAlt } from '../../models/safe-handle-zero-or-minus-one-is-invalid-alt.interface';
import { ApiSafeHandleZeroOrMinusOneIsInvalidAltDto } from '../../../swagger/models/api-safe-handle-zero-or-minus-one-is-invalid';

export const apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter = (source?: SafeHandleZeroOrMinusOneIsInvalidAlt | null): ApiSafeHandleZeroOrMinusOneIsInvalidAltDto => {
  return (source ?? {}) as ApiSafeHandleZeroOrMinusOneIsInvalidAltDto;
}
