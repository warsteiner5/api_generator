import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { DealGetDataForDealDocumentSignedByParticipant$Params } from '../../../swagger/fn/deal/deal-get-data-for-deal-document-signed-by-participant';
import { adaptApiDealDocumentSignatureInfoBindingModelAltDto } from '../../adapters/toDto/api-deal-document-signature-info-binding-model.adapter';

export interface DealGetDataForDealDocumentSignedByParticipantParams {
  body?: DealDocumentSignatureInfoBindingModelAlt;
}

export const dealGetDataForDealDocumentSignedByParticipantParamsAdapter = {
  adapt(params?: DealGetDataForDealDocumentSignedByParticipantParams): DealGetDataForDealDocumentSignedByParticipant$Params {
    if (!params) {
      return {} as DealGetDataForDealDocumentSignedByParticipant$Params;
    }
    return {
      body: adaptApiDealDocumentSignatureInfoBindingModelAltDto(params.body),
    };
  }
};
