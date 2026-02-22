import { CertificateVerifyModelAlt } from '../../models/certificate-verify-model-alt.interface';
import { ApiCertificateVerifyModelAltDto } from '../../../swagger/models/api-certificate-verify-model';

export const apiCertificateVerifyModelAltDtoAdapter = (source?: CertificateVerifyModelAlt | null): ApiCertificateVerifyModelAltDto => {
  return {
    SignedData: source?.signedData,
  };
}
