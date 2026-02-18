import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer';
import { adaptApiAdditionalAgreementDocumentSignatureInfoDto } from '../../adapters/toDto/api-additional-agreement-document-signature-info-dto.adapter';

export interface AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams {
  body?: AdditionalAgreementDocumentSignatureInfo;
}

export const additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParamsAdapter = {
  adapt(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams): AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params {
    if (!params) {
      return {} as AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params;
    }
    return {
      body: adaptApiAdditionalAgreementDocumentSignatureInfoDto(params.body),
    };
  }
};
