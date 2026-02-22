import { AdditionalAgreementsSign$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-sign';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { apiSignAdditionalAgreementDtoAdapter } from '../../adapters/models/api-sign-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsSignParams {
  body?: SignAdditionalAgreement;
}

export function additionalAgreementsSignAdapter(params?: AdditionalAgreementsSignParams): AdditionalAgreementsSign$Params {
  if (!params) {
    return {} as AdditionalAgreementsSign$Params;
  }
  return {
      body: apiSignAdditionalAgreementDtoAdapter(params.body),
  };
}
