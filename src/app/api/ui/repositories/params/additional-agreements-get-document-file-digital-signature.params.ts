import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { AdditionalAgreementsGetDocumentFileDigitalSignature$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-document-file-digital-signature';
import { apiAdditionalAgreementDocumentSignatureInfoDtoAdapter } from '../../adapters/models/api-additional-agreement-document-signature-info-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsGetDocumentFileDigitalSignatureParams {
  body?: AdditionalAgreementDocumentSignatureInfo;
}

export function additionalAgreementsGetDocumentFileDigitalSignatureAdapter(params?: AdditionalAgreementsGetDocumentFileDigitalSignatureParams): AdditionalAgreementsGetDocumentFileDigitalSignature$Params {
  if (!params) {
    return {} as AdditionalAgreementsGetDocumentFileDigitalSignature$Params;
  }
  return {
      body: apiAdditionalAgreementDocumentSignatureInfoDtoAdapter(params.body),
  };
}
