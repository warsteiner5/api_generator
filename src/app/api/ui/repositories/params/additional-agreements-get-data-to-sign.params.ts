import { AdditionalAgreementsGetDataToSign$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-data-to-sign';
import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';
import { adaptApiGetDataToSignAdditionalAgreementDto } from '../../adapters/toDto/api-get-data-to-sign-additional-agreement-dto.adapter';

export interface AdditionalAgreementsGetDataToSignParams {
  body?: GetDataToSignAdditionalAgreement;
}

export const additionalAgreementsGetDataToSignParamsAdapter = {
  adapt(params?: AdditionalAgreementsGetDataToSignParams): AdditionalAgreementsGetDataToSign$Params {
    if (!params) {
      return {} as AdditionalAgreementsGetDataToSign$Params;
    }
    return {
      body: adaptApiGetDataToSignAdditionalAgreementDto(params.body),
    };
  }
};
