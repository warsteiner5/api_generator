import { AdditionalAgreementsReject$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-reject';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { adaptApiRejectAdditionalAgreementDto } from '../../adapters/toDto/api-reject-additional-agreement-dto.adapter';

export interface AdditionalAgreementsRejectParams {
  body?: RejectAdditionalAgreement;
}

export const additionalAgreementsRejectParamsAdapter = {
  adapt(params?: AdditionalAgreementsRejectParams): AdditionalAgreementsReject$Params {
    if (!params) {
      return {} as AdditionalAgreementsReject$Params;
    }
    return {
      body: adaptApiRejectAdditionalAgreementDto(params.body),
    };
  }
};
