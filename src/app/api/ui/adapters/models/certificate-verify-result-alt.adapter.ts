import { ApiCertificateVerifyResultAltDto } from '../../../swagger/models/api-certificate-verify-result';
import { CertificateVerifyResultAlt } from '../../models/certificate-verify-result-alt.interface';
import { authStatusEnumAdapter } from '../enums/auth-status-enum.adapter';

export const certificateVerifyResultAltAdapter = (source?: ApiCertificateVerifyResultAltDto | null): CertificateVerifyResultAlt => {
  return {
    errorMessage: source?.ErrorMessage,
    status: source?.Status === null ? undefined : authStatusEnumAdapter(source?.Status),
  };
}
