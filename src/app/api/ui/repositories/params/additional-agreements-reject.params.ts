import { AdditionalAgreementsReject$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-reject';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { apiRejectAdditionalAgreementDtoAdapter } from '../../adapters/models/api-reject-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsRejectParams {
  body?: RejectAdditionalAgreement;
}

export function additionalAgreementsRejectAdapter(params?: AdditionalAgreementsRejectParams): AdditionalAgreementsReject$Params {
  if (!params) {
    return {} as AdditionalAgreementsReject$Params;
  }
  return {
      body: apiRejectAdditionalAgreementDtoAdapter(params.body),
  };
}
