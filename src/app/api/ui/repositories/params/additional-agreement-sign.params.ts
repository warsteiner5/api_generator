import { AdditionalAgreementSign$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-sign';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { apiSignAdditionalAgreementDtoAdapter } from '../../adapters/models/api-sign-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementSignParams {
  body?: SignAdditionalAgreement;
}

export function additionalAgreementSignAdapter(params?: AdditionalAgreementSignParams): AdditionalAgreementSign$Params {
  if (!params) {
    return {} as AdditionalAgreementSign$Params;
  }
  return {
      body: apiSignAdditionalAgreementDtoAdapter(params.body),
  };
}
