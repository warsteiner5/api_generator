import { AdditionalAgreementSign$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-sign';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { adaptApiSignAdditionalAgreementDto } from '../../adapters/toDto/api-sign-additional-agreement-dto.adapter';

export interface AdditionalAgreementSignParams {
  body?: SignAdditionalAgreement;
}

export const additionalAgreementSignParamsAdapter = {
  adapt(params?: AdditionalAgreementSignParams): AdditionalAgreementSign$Params {
    if (!params) {
      return {} as AdditionalAgreementSign$Params;
    }
    return {
      body: adaptApiSignAdditionalAgreementDto(params.body),
    };
  }
};
