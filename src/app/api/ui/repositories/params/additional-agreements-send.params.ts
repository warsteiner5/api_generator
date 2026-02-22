import { AdditionalAgreementsSend$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';
import { apiSignatureForAdditionalAgreementDtoAdapter } from '../../adapters/models/api-signature-for-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsSendParams {
  id: number;
  body?: SignatureForAdditionalAgreement;
}

export function additionalAgreementsSendAdapter(params?: AdditionalAgreementsSendParams): AdditionalAgreementsSend$Params {
  if (!params) {
    return {} as AdditionalAgreementsSend$Params;
  }
  return {
      id: params.id,
      body: apiSignatureForAdditionalAgreementDtoAdapter(params.body),
  };
}
