import { ParticipantGetParticipantShortInfo$Params } from '../../../swagger/fn/participant/participant-get-participant-short-info';

// @ts-ignore
export interface ParticipantGetParticipantShortInfoParams {
  nameOrInn?: string;
  id?: string;
}

export function participantGetParticipantShortInfoAdapter(params?: ParticipantGetParticipantShortInfoParams): ParticipantGetParticipantShortInfo$Params {
  if (!params) {
    return {} as ParticipantGetParticipantShortInfo$Params;
  }
  return {
      nameOrInn: params.nameOrInn,
      id: params.id,
  };
}
