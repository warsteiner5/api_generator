import { X509Certificate2Alt } from '../../models/x-509-certificate-2-alt.interface';
import { ApiX509Certificate2AltDto } from '../../../swagger/models/api-x-509-certificate-2';

export function adaptApiX509Certificate2AltDto(source?: X509Certificate2Alt | null): ApiX509Certificate2AltDto {
  return (source ?? {}) as ApiX509Certificate2AltDto;
}
