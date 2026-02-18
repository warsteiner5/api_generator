import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { DealGetDataForDealDocumentSignedByCustomer$Params } from '../../../swagger/fn/deal/deal-get-data-for-deal-document-signed-by-customer';
import { adaptApiDealDocumentSignatureInfoBindingModelAltDto } from '../../adapters/toDto/api-deal-document-signature-info-binding-model.adapter';

export interface DealGetDataForDealDocumentSignedByCustomerParams {
  body?: DealDocumentSignatureInfoBindingModelAlt;
}

export const dealGetDataForDealDocumentSignedByCustomerParamsAdapter = {
  adapt(params?: DealGetDataForDealDocumentSignedByCustomerParams): DealGetDataForDealDocumentSignedByCustomer$Params {
    if (!params) {
      return {} as DealGetDataForDealDocumentSignedByCustomer$Params;
    }
    return {
      body: adaptApiDealDocumentSignatureInfoBindingModelAltDto(params.body),
    };
  }
};
