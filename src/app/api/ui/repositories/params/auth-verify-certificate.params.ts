import { AuthVerifyCertificate$Params } from '../../../swagger/fn/auth/auth-verify-certificate';
import { CertificateVerifyModelAlt } from '../../models/certificate-verify-model-alt.interface';
import { adaptApiCertificateVerifyModelAltDto } from '../../adapters/toDto/api-certificate-verify-model.adapter';

export interface AuthVerifyCertificateParams {
  body?: CertificateVerifyModelAlt;
}

export const authVerifyCertificateParamsAdapter = {
  adapt(params?: AuthVerifyCertificateParams): AuthVerifyCertificate$Params {
    if (!params) {
      return {} as AuthVerifyCertificate$Params;
    }
    return {
      body: adaptApiCertificateVerifyModelAltDto(params.body),
    };
  }
};
