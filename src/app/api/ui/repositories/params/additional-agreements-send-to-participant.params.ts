import { AdditionalAgreementsSendToParticipant$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send-to-participant';

// @ts-ignore
export interface AdditionalAgreementsSendToParticipantParams {
  id: number;
}

export function additionalAgreementsSendToParticipantAdapter(params?: AdditionalAgreementsSendToParticipantParams): AdditionalAgreementsSendToParticipant$Params {
  if (!params) {
    return {} as AdditionalAgreementsSendToParticipant$Params;
  }
  return {
      id: params.id,
  };
}
