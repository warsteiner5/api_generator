import { AdditionalAgreementsRejectExternal$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-reject-external';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { adaptApiRejectAdditionalAgreementDto } from '../../adapters/toDto/api-reject-additional-agreement-dto.adapter';

export interface AdditionalAgreementsRejectExternalParams {
  body?: RejectAdditionalAgreement;
}

export const additionalAgreementsRejectExternalParamsAdapter = {
  adapt(params?: AdditionalAgreementsRejectExternalParams): AdditionalAgreementsRejectExternal$Params {
    if (!params) {
      return {} as AdditionalAgreementsRejectExternal$Params;
    }
    return {
      body: adaptApiRejectAdditionalAgreementDto(params.body),
    };
  }
};
