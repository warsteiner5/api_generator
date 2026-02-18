import { AdditionalAgreementSendForApprove$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-send-for-approve';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';
import { adaptApiSignatureForAdditionalAgreementDto } from '../../adapters/toDto/api-signature-for-additional-agreement-dto.adapter';

export interface AdditionalAgreementSendForApproveParams {
  id: number;
  body?: SignatureForAdditionalAgreement;
}

export const additionalAgreementSendForApproveParamsAdapter = {
  adapt(params?: AdditionalAgreementSendForApproveParams): AdditionalAgreementSendForApprove$Params {
    if (!params) {
      return {} as AdditionalAgreementSendForApprove$Params;
    }
    return {
      id: params.id,
      body: adaptApiSignatureForAdditionalAgreementDto(params.body),
    };
  }
};
