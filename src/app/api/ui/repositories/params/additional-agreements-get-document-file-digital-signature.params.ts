import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { AdditionalAgreementsGetDocumentFileDigitalSignature$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-document-file-digital-signature';
import { adaptApiAdditionalAgreementDocumentSignatureInfoDto } from '../../adapters/toDto/api-additional-agreement-document-signature-info-dto.adapter';

export interface AdditionalAgreementsGetDocumentFileDigitalSignatureParams {
  body?: AdditionalAgreementDocumentSignatureInfo;
}

export const additionalAgreementsGetDocumentFileDigitalSignatureParamsAdapter = {
  adapt(params?: AdditionalAgreementsGetDocumentFileDigitalSignatureParams): AdditionalAgreementsGetDocumentFileDigitalSignature$Params {
    if (!params) {
      return {} as AdditionalAgreementsGetDocumentFileDigitalSignature$Params;
    }
    return {
      body: adaptApiAdditionalAgreementDocumentSignatureInfoDto(params.body),
    };
  }
};
