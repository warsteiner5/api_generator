import { AdditionalAgreementsRejectExternal$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-reject-external';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { apiRejectAdditionalAgreementDtoAdapter } from '../../adapters/models/api-reject-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsRejectExternalParams {
  body?: RejectAdditionalAgreement;
}

export function additionalAgreementsRejectExternalAdapter(params?: AdditionalAgreementsRejectExternalParams): AdditionalAgreementsRejectExternal$Params {
  if (!params) {
    return {} as AdditionalAgreementsRejectExternal$Params;
  }
  return {
      body: apiRejectAdditionalAgreementDtoAdapter(params.body),
  };
}
