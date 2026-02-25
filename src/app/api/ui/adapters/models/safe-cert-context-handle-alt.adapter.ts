import { ApiSafeCertContextHandleAltDto } from '../../../swagger/models/api-safe-cert-context-handle';
import { SafeCertContextHandleAlt } from '../../models/safe-cert-context-handle-alt.interface';
import { safeHandleZeroOrMinusOneIsInvalidAltAdapter } from './safe-handle-zero-or-minus-one-is-invalid-alt.adapter';

export const safeCertContextHandleAltAdapter = (source?: ApiSafeCertContextHandleAltDto | null): SafeCertContextHandleAlt => {
  return {
    ...safeHandleZeroOrMinusOneIsInvalidAltAdapter(source as unknown as Parameters<typeof safeHandleZeroOrMinusOneIsInvalidAltAdapter>[0]),
  };
}
