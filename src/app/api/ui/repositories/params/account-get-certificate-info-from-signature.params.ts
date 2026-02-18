import { AccountGetCertificateInfoFromSignature$Params } from '../../../swagger/fn/account/account-get-certificate-info-from-signature';
import { SignatureObject } from '../../models/signature-object.interface';
import { adaptApiSignatureObjectDto } from '../../adapters/toDto/api-signature-object-dto.adapter';

export interface AccountGetCertificateInfoFromSignatureParams {
  body?: SignatureObject;
}

export const accountGetCertificateInfoFromSignatureParamsAdapter = {
  adapt(params?: AccountGetCertificateInfoFromSignatureParams): AccountGetCertificateInfoFromSignature$Params {
    if (!params) {
      return {} as AccountGetCertificateInfoFromSignature$Params;
    }
    return {
      body: adaptApiSignatureObjectDto(params.body),
    };
  }
};
