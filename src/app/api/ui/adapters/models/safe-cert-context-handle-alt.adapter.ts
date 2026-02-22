import { ApiSafeCertContextHandleAltDto } from '../../../swagger/models/api-safe-cert-context-handle';
import { SafeCertContextHandleAlt } from '../../models/safe-cert-context-handle-alt.interface';

export const safeCertContextHandleAltAdapter = (source?: ApiSafeCertContextHandleAltDto | null): SafeCertContextHandleAlt => {
  return (source ?? {}) as SafeCertContextHandleAlt;
}
