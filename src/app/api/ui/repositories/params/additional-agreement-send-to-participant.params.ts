import { AdditionalAgreementSendToParticipant$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-send-to-participant';

export interface AdditionalAgreementSendToParticipantParams {
  id: number;
}

export const additionalAgreementSendToParticipantParamsAdapter = {
  adapt(params?: AdditionalAgreementSendToParticipantParams): AdditionalAgreementSendToParticipant$Params {
    if (!params) {
      return {} as AdditionalAgreementSendToParticipant$Params;
    }
    return {
      id: params.id,
    };
  }
};
