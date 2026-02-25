import { ApiSafeHandleZeroOrMinusOneIsInvalidAltDto } from '../../../swagger/models/api-safe-handle-zero-or-minus-one-is-invalid';
import { SafeHandleZeroOrMinusOneIsInvalidAlt } from '../../models/safe-handle-zero-or-minus-one-is-invalid-alt.interface';
import { safeHandleAltAdapter } from './safe-handle-alt.adapter';

export const safeHandleZeroOrMinusOneIsInvalidAltAdapter = (source?: ApiSafeHandleZeroOrMinusOneIsInvalidAltDto | null): SafeHandleZeroOrMinusOneIsInvalidAlt => {
  return {
    ...safeHandleAltAdapter(source as unknown as Parameters<typeof safeHandleAltAdapter>[0]),
    isInvalid: source?.IsInvalid,
  };
}
