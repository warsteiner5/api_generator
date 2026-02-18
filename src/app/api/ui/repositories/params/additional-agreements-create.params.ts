import { AdditionalAgreementsCreate$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-create';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { adaptApiCreateAdditionalAgreementDto } from '../../adapters/toDto/api-create-additional-agreement-dto.adapter';

export interface AdditionalAgreementsCreateParams {
  body?: CreateAdditionalAgreement;
}

export const additionalAgreementsCreateParamsAdapter = {
  adapt(params?: AdditionalAgreementsCreateParams): AdditionalAgreementsCreate$Params {
    if (!params) {
      return {} as AdditionalAgreementsCreate$Params;
    }
    return {
      body: adaptApiCreateAdditionalAgreementDto(params.body),
    };
  }
};
