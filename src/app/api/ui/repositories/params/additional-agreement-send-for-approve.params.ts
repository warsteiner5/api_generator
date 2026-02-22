import { AdditionalAgreementSendForApprove$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-send-for-approve';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';
import { apiSignatureForAdditionalAgreementDtoAdapter } from '../../adapters/models/api-signature-for-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementSendForApproveParams {
  id: number;
  body?: SignatureForAdditionalAgreement;
}

export function additionalAgreementSendForApproveAdapter(params?: AdditionalAgreementSendForApproveParams): AdditionalAgreementSendForApprove$Params {
  if (!params) {
    return {} as AdditionalAgreementSendForApprove$Params;
  }
  return {
      id: params.id,
      body: apiSignatureForAdditionalAgreementDtoAdapter(params.body),
  };
}
