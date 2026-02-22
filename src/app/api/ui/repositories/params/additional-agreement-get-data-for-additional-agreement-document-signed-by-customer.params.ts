import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer';
import { apiAdditionalAgreementDocumentSignatureInfoDtoAdapter } from '../../adapters/models/api-additional-agreement-document-signature-info-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams {
  body?: AdditionalAgreementDocumentSignatureInfo;
}

export function additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerAdapter(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams): AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params {
  if (!params) {
    return {} as AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params;
  }
  return {
      body: apiAdditionalAgreementDocumentSignatureInfoDtoAdapter(params.body),
  };
}
