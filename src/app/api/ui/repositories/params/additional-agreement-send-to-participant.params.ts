import { AdditionalAgreementSendToParticipant$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-send-to-participant';

// @ts-ignore
export interface AdditionalAgreementSendToParticipantParams {
  id: number;
}

export function additionalAgreementSendToParticipantAdapter(params?: AdditionalAgreementSendToParticipantParams): AdditionalAgreementSendToParticipant$Params {
  if (!params) {
    return {} as AdditionalAgreementSendToParticipant$Params;
  }
  return {
      id: params.id,
  };
}
