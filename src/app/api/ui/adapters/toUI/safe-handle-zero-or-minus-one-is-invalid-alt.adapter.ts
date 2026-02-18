import { ApiSafeHandleZeroOrMinusOneIsInvalidAltDto } from '../../../swagger/models/api-safe-handle-zero-or-minus-one-is-invalid';
import { SafeHandleZeroOrMinusOneIsInvalidAlt } from '../../models/safe-handle-zero-or-minus-one-is-invalid-alt.interface';

export function adaptSafeHandleZeroOrMinusOneIsInvalidAltToUI(source?: ApiSafeHandleZeroOrMinusOneIsInvalidAltDto | null): SafeHandleZeroOrMinusOneIsInvalidAlt {
  return (source ?? {}) as SafeHandleZeroOrMinusOneIsInvalidAlt;
}
