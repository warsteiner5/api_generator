import { AdditionalAgreementReject$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-reject';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { adaptApiRejectAdditionalAgreementDto } from '../../adapters/toDto/api-reject-additional-agreement-dto.adapter';

export interface AdditionalAgreementRejectParams {
  body?: RejectAdditionalAgreement;
}

export const additionalAgreementRejectParamsAdapter = {
  adapt(params?: AdditionalAgreementRejectParams): AdditionalAgreementReject$Params {
    if (!params) {
      return {} as AdditionalAgreementReject$Params;
    }
    return {
      body: adaptApiRejectAdditionalAgreementDto(params.body),
    };
  }
};
