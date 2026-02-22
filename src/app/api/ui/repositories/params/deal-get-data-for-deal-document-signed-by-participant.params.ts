import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { DealGetDataForDealDocumentSignedByParticipant$Params } from '../../../swagger/fn/deal/deal-get-data-for-deal-document-signed-by-participant';
import { apiDealDocumentSignatureInfoBindingModelAltDtoAdapter } from '../../adapters/models/api-deal-document-signature-info-binding-model.adapter';

// @ts-ignore
export interface DealGetDataForDealDocumentSignedByParticipantParams {
  body?: DealDocumentSignatureInfoBindingModelAlt;
}

export function dealGetDataForDealDocumentSignedByParticipantAdapter(params?: DealGetDataForDealDocumentSignedByParticipantParams): DealGetDataForDealDocumentSignedByParticipant$Params {
  if (!params) {
    return {} as DealGetDataForDealDocumentSignedByParticipant$Params;
  }
  return {
      body: apiDealDocumentSignatureInfoBindingModelAltDtoAdapter(params.body),
  };
}
