import { ApiX509Certificate2AltDto } from '../../../swagger/models/api-x-509-certificate-2';
import { X509Certificate2Alt } from '../../models/x-509-certificate-2-alt.interface';

export function adaptX509Certificate2AltToUI(source?: ApiX509Certificate2AltDto | null): X509Certificate2Alt {
  return (source ?? {}) as X509Certificate2Alt;
}
