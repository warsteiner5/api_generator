import { ApiSafeCertContextHandle2AltDto } from '../../../swagger/models/api-safe-cert-context-handle-2';
import { SafeCertContextHandle2Alt } from '../../models/safe-cert-context-handle-2-alt.interface';
import { safeHandleZeroOrMinusOneIsInvalidAltAdapter } from './safe-handle-zero-or-minus-one-is-invalid-alt.adapter';

export const safeCertContextHandle2AltAdapter = (source?: ApiSafeCertContextHandle2AltDto | null): SafeCertContextHandle2Alt => {
  return {
    ...safeHandleZeroOrMinusOneIsInvalidAltAdapter(source as unknown as Parameters<typeof safeHandleZeroOrMinusOneIsInvalidAltAdapter>[0]),
  };
}
