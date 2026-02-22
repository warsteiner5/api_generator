import { AdditionalAgreementReject$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-reject';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { apiRejectAdditionalAgreementDtoAdapter } from '../../adapters/models/api-reject-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementRejectParams {
  body?: RejectAdditionalAgreement;
}

export function additionalAgreementRejectAdapter(params?: AdditionalAgreementRejectParams): AdditionalAgreementReject$Params {
  if (!params) {
    return {} as AdditionalAgreementReject$Params;
  }
  return {
      body: apiRejectAdditionalAgreementDtoAdapter(params.body),
  };
}
