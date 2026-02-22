import { AdditionalAgreementCreate$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-create';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { apiCreateAdditionalAgreementDtoAdapter } from '../../adapters/models/api-create-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementCreateParams {
  body?: CreateAdditionalAgreement;
}

export function additionalAgreementCreateAdapter(params?: AdditionalAgreementCreateParams): AdditionalAgreementCreate$Params {
  if (!params) {
    return {} as AdditionalAgreementCreate$Params;
  }
  return {
      body: apiCreateAdditionalAgreementDtoAdapter(params.body),
  };
}
