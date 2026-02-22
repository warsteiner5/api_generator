import { ParticipantGetParticipant$Params } from '../../../swagger/fn/participant/participant-get-participant';

// @ts-ignore
export interface ParticipantGetParticipantParams {
  id: number;
}

export function participantGetParticipantAdapter(params?: ParticipantGetParticipantParams): ParticipantGetParticipant$Params {
  if (!params) {
    return {} as ParticipantGetParticipant$Params;
  }
  return {
      id: params.id,
  };
}
