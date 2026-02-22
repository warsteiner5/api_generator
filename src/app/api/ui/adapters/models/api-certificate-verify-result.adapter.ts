import { CertificateVerifyResultAlt } from '../../models/certificate-verify-result-alt.interface';
import { ApiCertificateVerifyResultAltDto } from '../../../swagger/models/api-certificate-verify-result';
import { apiAuthStatusEnumAdapter } from '../enums/api-auth-status-enum.adapter';

export const apiCertificateVerifyResultAltDtoAdapter = (source?: CertificateVerifyResultAlt | null): ApiCertificateVerifyResultAltDto => {
  return {
    ErrorMessage: source?.errorMessage,
    Status: source?.status === null ? undefined : apiAuthStatusEnumAdapter(source?.status),
  };
}
