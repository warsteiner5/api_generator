import { ParticipantGetParticipant$Params } from '../../../swagger/fn/participant/participant-get-participant';

export interface ParticipantGetParticipantParams {
  id: number;
}

export const participantGetParticipantParamsAdapter = {
  adapt(params?: ParticipantGetParticipantParams): ParticipantGetParticipant$Params {
    if (!params) {
      return {} as ParticipantGetParticipant$Params;
    }
    return {
      id: params.id,
    };
  }
};
