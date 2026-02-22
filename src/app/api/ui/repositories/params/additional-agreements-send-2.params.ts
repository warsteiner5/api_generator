import { AdditionalAgreementsSend2$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send-2';
import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { apiSendAdditionalAgreementDtoAdapter } from '../../adapters/models/api-send-additional-agreement-dto.adapter';

// @ts-ignore
export interface AdditionalAgreementsSend2Params {
  body?: SendAdditionalAgreement;
}

export function additionalAgreementsSend2Adapter(params?: AdditionalAgreementsSend2Params): AdditionalAgreementsSend2$Params {
  if (!params) {
    return {} as AdditionalAgreementsSend2$Params;
  }
  return {
      body: apiSendAdditionalAgreementDtoAdapter(params.body),
  };
}
