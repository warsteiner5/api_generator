import { AdditionalAgreementsSignExternal$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-sign-external';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { apiSignAdditionalAgreementDtoAdapter } from '../../adapters/models/api-sign-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsSignExternalParams {
  body?: SignAdditionalAgreement;
}

export function additionalAgreementsSignExternalAdapter(params?: AdditionalAgreementsSignExternalParams): AdditionalAgreementsSignExternal$Params {
  if (!params) {
    return {} as AdditionalAgreementsSignExternal$Params;
  }
  return {
      body: apiSignAdditionalAgreementDtoAdapter(params.body),
  };
}
