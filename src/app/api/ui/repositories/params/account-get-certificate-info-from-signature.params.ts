import { AccountGetCertificateInfoFromSignature$Params } from '../../../swagger/fn/account/account-get-certificate-info-from-signature';
import { SignatureObject } from '../../models/signature-object.interface';
import { apiSignatureObjectDtoAdapter } from '../../adapters/models/api-signature-object-dto.adapter';

// @ts-ignore
export interface AccountGetCertificateInfoFromSignatureParams {
  body?: SignatureObject;
}

export function accountGetCertificateInfoFromSignatureAdapter(params?: AccountGetCertificateInfoFromSignatureParams): AccountGetCertificateInfoFromSignature$Params {
  if (!params) {
    return {} as AccountGetCertificateInfoFromSignature$Params;
  }
  return {
      body: apiSignatureObjectDtoAdapter(params.body),
  };
}
