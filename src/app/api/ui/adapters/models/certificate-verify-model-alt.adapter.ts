import { ApiCertificateVerifyModelAltDto } from '../../../swagger/models/api-certificate-verify-model';
import { CertificateVerifyModelAlt } from '../../models/certificate-verify-model-alt.interface';

export const certificateVerifyModelAltAdapter = (source?: ApiCertificateVerifyModelAltDto | null): CertificateVerifyModelAlt => {
  return {
    signedData: source?.SignedData,
  };
}
