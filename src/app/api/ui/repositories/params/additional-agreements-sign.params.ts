import { AdditionalAgreementsSign$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-sign';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { adaptApiSignAdditionalAgreementDto } from '../../adapters/toDto/api-sign-additional-agreement-dto.adapter';

export interface AdditionalAgreementsSignParams {
  body?: SignAdditionalAgreement;
}

export const additionalAgreementsSignParamsAdapter = {
  adapt(params?: AdditionalAgreementsSignParams): AdditionalAgreementsSign$Params {
    if (!params) {
      return {} as AdditionalAgreementsSign$Params;
    }
    return {
      body: adaptApiSignAdditionalAgreementDto(params.body),
    };
  }
};
