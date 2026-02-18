import { SafeCertContextHandle2Alt } from '../../models/safe-cert-context-handle-2-alt.interface';
import { ApiSafeCertContextHandle2AltDto } from '../../../swagger/models/api-safe-cert-context-handle-2';

export function adaptApiSafeCertContextHandle2AltDto(source?: SafeCertContextHandle2Alt | null): ApiSafeCertContextHandle2AltDto {
  return (source ?? {}) as ApiSafeCertContextHandle2AltDto;
}
