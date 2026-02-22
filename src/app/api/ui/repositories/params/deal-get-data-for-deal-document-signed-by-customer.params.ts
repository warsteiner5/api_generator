import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { DealGetDataForDealDocumentSignedByCustomer$Params } from '../../../swagger/fn/deal/deal-get-data-for-deal-document-signed-by-customer';
import { apiDealDocumentSignatureInfoBindingModelAltDtoAdapter } from '../../adapters/models/api-deal-document-signature-info-binding-model.adapter';

// @ts-ignore
export interface DealGetDataForDealDocumentSignedByCustomerParams {
  body?: DealDocumentSignatureInfoBindingModelAlt;
}

export function dealGetDataForDealDocumentSignedByCustomerAdapter(params?: DealGetDataForDealDocumentSignedByCustomerParams): DealGetDataForDealDocumentSignedByCustomer$Params {
  if (!params) {
    return {} as DealGetDataForDealDocumentSignedByCustomer$Params;
  }
  return {
      body: apiDealDocumentSignatureInfoBindingModelAltDtoAdapter(params.body),
  };
}
