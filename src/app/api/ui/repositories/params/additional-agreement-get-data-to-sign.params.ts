import { AdditionalAgreementGetDataToSign$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-data-to-sign';
import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';
import { adaptApiGetDataToSignAdditionalAgreementDto } from '../../adapters/toDto/api-get-data-to-sign-additional-agreement-dto.adapter';

export interface AdditionalAgreementGetDataToSignParams {
  body?: GetDataToSignAdditionalAgreement;
}

export const additionalAgreementGetDataToSignParamsAdapter = {
  adapt(params?: AdditionalAgreementGetDataToSignParams): AdditionalAgreementGetDataToSign$Params {
    if (!params) {
      return {} as AdditionalAgreementGetDataToSign$Params;
    }
    return {
      body: adaptApiGetDataToSignAdditionalAgreementDto(params.body),
    };
  }
};
