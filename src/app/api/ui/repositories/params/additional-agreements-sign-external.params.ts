import { AdditionalAgreementsSignExternal$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-sign-external';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { adaptApiSignAdditionalAgreementDto } from '../../adapters/toDto/api-sign-additional-agreement-dto.adapter';

export interface AdditionalAgreementsSignExternalParams {
  body?: SignAdditionalAgreement;
}

export const additionalAgreementsSignExternalParamsAdapter = {
  adapt(params?: AdditionalAgreementsSignExternalParams): AdditionalAgreementsSignExternal$Params {
    if (!params) {
      return {} as AdditionalAgreementsSignExternal$Params;
    }
    return {
      body: adaptApiSignAdditionalAgreementDto(params.body),
    };
  }
};
