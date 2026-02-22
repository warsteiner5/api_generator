import { AuthVerifyCertificate$Params } from '../../../swagger/fn/auth/auth-verify-certificate';
import { CertificateVerifyModelAlt } from '../../models/certificate-verify-model-alt.interface';
import { apiCertificateVerifyModelAltDtoAdapter } from '../../adapters/models/api-certificate-verify-model.adapter';

// @ts-ignore
export interface AuthVerifyCertificateParams {
  body?: CertificateVerifyModelAlt;
}

export function authVerifyCertificateAdapter(params?: AuthVerifyCertificateParams): AuthVerifyCertificate$Params {
  if (!params) {
    return {} as AuthVerifyCertificate$Params;
  }
  return {
      body: apiCertificateVerifyModelAltDtoAdapter(params.body),
  };
}
