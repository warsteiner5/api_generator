import { CertificateVerifyResultAlt } from '../../models/certificate-verify-result-alt.interface';
import { ApiCertificateVerifyResultAltDto } from '../../../swagger/models/api-certificate-verify-result';
import { adaptApiAuthStatusEnum } from './api-auth-status-enum.adapter';

export function adaptApiCertificateVerifyResultAltDto(source?: CertificateVerifyResultAlt | null): ApiCertificateVerifyResultAltDto {
  return {
    ErrorMessage: source?.errorMessage,
    Status: adaptApiAuthStatusEnum(source?.status),
  };
}
