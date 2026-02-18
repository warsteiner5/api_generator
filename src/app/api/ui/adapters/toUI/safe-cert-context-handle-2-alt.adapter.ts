import { ApiSafeCertContextHandle2AltDto } from '../../../swagger/models/api-safe-cert-context-handle-2';
import { SafeCertContextHandle2Alt } from '../../models/safe-cert-context-handle-2-alt.interface';

export function adaptSafeCertContextHandle2AltToUI(source?: ApiSafeCertContextHandle2AltDto | null): SafeCertContextHandle2Alt {
  return (source ?? {}) as SafeCertContextHandle2Alt;
}
