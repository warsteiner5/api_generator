import { AdditionalAgreementsGetDataToSign$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-data-to-sign';
import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';
import { apiGetDataToSignAdditionalAgreementDtoAdapter } from '../../adapters/models/api-get-data-to-sign-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsGetDataToSignParams {
  body?: GetDataToSignAdditionalAgreement;
}

export function additionalAgreementsGetDataToSignAdapter(params?: AdditionalAgreementsGetDataToSignParams): AdditionalAgreementsGetDataToSign$Params {
  if (!params) {
    return {} as AdditionalAgreementsGetDataToSign$Params;
  }
  return {
      body: apiGetDataToSignAdditionalAgreementDtoAdapter(params.body),
  };
}
