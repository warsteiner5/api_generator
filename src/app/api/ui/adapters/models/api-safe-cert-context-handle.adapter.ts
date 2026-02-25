import { SafeCertContextHandleAlt } from '../../models/safe-cert-context-handle-alt.interface';
import { ApiSafeCertContextHandleAltDto } from '../../../swagger/models/api-safe-cert-context-handle';
import { apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter } from './api-safe-handle-zero-or-minus-one-is-invalid.adapter';

export const apiSafeCertContextHandleAltDtoAdapter = (source?: SafeCertContextHandleAlt | null): ApiSafeCertContextHandleAltDto => {
  return {
    ...apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter(source as unknown as Parameters<typeof apiSafeHandleZeroOrMinusOneIsInvalidAltDtoAdapter>[0]),
  };
}
