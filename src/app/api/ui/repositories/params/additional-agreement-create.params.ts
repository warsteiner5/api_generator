import { AdditionalAgreementCreate$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-create';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { adaptApiCreateAdditionalAgreementDto } from '../../adapters/toDto/api-create-additional-agreement-dto.adapter';

export interface AdditionalAgreementCreateParams {
  body?: CreateAdditionalAgreement;
}

export const additionalAgreementCreateParamsAdapter = {
  adapt(params?: AdditionalAgreementCreateParams): AdditionalAgreementCreate$Params {
    if (!params) {
      return {} as AdditionalAgreementCreate$Params;
    }
    return {
      body: adaptApiCreateAdditionalAgreementDto(params.body),
    };
  }
};
