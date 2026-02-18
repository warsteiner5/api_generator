import { ApiCertificateVerifyResultAltDto } from '../../../swagger/models/api-certificate-verify-result';
import { CertificateVerifyResultAlt } from '../../models/certificate-verify-result-alt.interface';
import { adaptAuthStatusEnumToUI } from './auth-status-enum.adapter';

export function adaptCertificateVerifyResultAltToUI(source?: ApiCertificateVerifyResultAltDto | null): CertificateVerifyResultAlt {
  return {
    errorMessage: source?.ErrorMessage ?? '',
    status: adaptAuthStatusEnumToUI(source?.Status),
  };
}
