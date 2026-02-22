import { AdditionalAgreementGetDataToSign$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-data-to-sign';
import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';
import { apiGetDataToSignAdditionalAgreementDtoAdapter } from '../../adapters/models/api-get-data-to-sign-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementGetDataToSignParams {
  body?: GetDataToSignAdditionalAgreement;
}

export function additionalAgreementGetDataToSignAdapter(params?: AdditionalAgreementGetDataToSignParams): AdditionalAgreementGetDataToSign$Params {
  if (!params) {
    return {} as AdditionalAgreementGetDataToSign$Params;
  }
  return {
      body: apiGetDataToSignAdditionalAgreementDtoAdapter(params.body),
  };
}
