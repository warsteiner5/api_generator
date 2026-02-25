import { SafeCertContextHandle2Alt } from '../../models/safe-cert-context-handle-2-alt.interface';
import { ApiSafeCertContextHandle2AltDto } from '../../../swagger/models/api-safe-cert-context-handle-2';
import { apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter } from './api-safe-handle-zero-or-minus-one-is-invalid.adapter';

export const apiSafeCertContextHandle2AltDtoAdapter = (source?: SafeCertContextHandle2Alt | null): ApiSafeCertContextHandle2AltDto => {
  return {
    ...apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter(source as unknown as Parameters<typeof apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter>[0]),
  };
}
