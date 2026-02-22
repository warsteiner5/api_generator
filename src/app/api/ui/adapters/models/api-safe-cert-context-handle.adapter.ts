import { SafeCertContextHandleAlt } from '../../models/safe-cert-context-handle-alt.interface';
import { ApiSafeCertContextHandleAltDto } from '../../../swagger/models/api-safe-cert-context-handle';

export const apiSafeCertContextHandleAltDtoAdapter = (source?: SafeCertContextHandleAlt | null): ApiSafeCertContextHandleAltDto => {
  return (source ?? {}) as ApiSafeCertContextHandleAltDto;
}
