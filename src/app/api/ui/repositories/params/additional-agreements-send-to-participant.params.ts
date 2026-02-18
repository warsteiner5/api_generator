import { AdditionalAgreementsSendToParticipant$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send-to-participant';

export interface AdditionalAgreementsSendToParticipantParams {
  id: number;
}

export const additionalAgreementsSendToParticipantParamsAdapter = {
  adapt(params?: AdditionalAgreementsSendToParticipantParams): AdditionalAgreementsSendToParticipant$Params {
    if (!params) {
      return {} as AdditionalAgreementsSendToParticipant$Params;
    }
    return {
      id: params.id,
    };
  }
};
