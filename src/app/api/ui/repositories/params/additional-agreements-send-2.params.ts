import { AdditionalAgreementsSend2$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send-2';
import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { adaptApiSendAdditionalAgreementDto } from '../../adapters/toDto/api-send-additional-agreement-dto.adapter';

export interface AdditionalAgreementsSend2Params {
  body?: SendAdditionalAgreement;
}

export const additionalAgreementsSend2ParamsAdapter = {
  adapt(params?: AdditionalAgreementsSend2Params): AdditionalAgreementsSend2$Params {
    if (!params) {
      return {} as AdditionalAgreementsSend2$Params;
    }
    return {
      body: adaptApiSendAdditionalAgreementDto(params.body),
    };
  }
};
