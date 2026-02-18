import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-participant';
import { adaptApiAdditionalAgreementDocumentSignatureInfoDto } from '../../adapters/toDto/api-additional-agreement-document-signature-info-dto.adapter';

export interface AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams {
  body?: AdditionalAgreementDocumentSignatureInfo;
}

export const additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParamsAdapter = {
  adapt(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams): AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params {
    if (!params) {
      return {} as AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params;
    }
    return {
      body: adaptApiAdditionalAgreementDocumentSignatureInfoDto(params.body),
    };
  }
};
