import { CertificateVerifyModelAlt } from '../../models/certificate-verify-model-alt.interface';
import { ApiCertificateVerifyModelAltDto } from '../../../swagger/models/api-certificate-verify-model';

export function adaptApiCertificateVerifyModelAltDto(source?: CertificateVerifyModelAlt | null): ApiCertificateVerifyModelAltDto {
  return {
    SignedData: source?.signedData,
  };
}
