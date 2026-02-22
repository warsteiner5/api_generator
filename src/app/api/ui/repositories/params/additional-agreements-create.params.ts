import { AdditionalAgreementsCreate$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-create';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { apiCreateAdditionalAgreementDtoAdapter } from '../../adapters/models/api-create-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsCreateParams {
  body?: CreateAdditionalAgreement;
}

export function additionalAgreementsCreateAdapter(params?: AdditionalAgreementsCreateParams): AdditionalAgreementsCreate$Params {
  if (!params) {
    return {} as AdditionalAgreementsCreate$Params;
  }
  return {
      body: apiCreateAdditionalAgreementDtoAdapter(params.body),
  };
}
