import { ParticipantGetParticipantShortInfo$Params } from '../../../swagger/fn/participant/participant-get-participant-short-info';

export interface ParticipantGetParticipantShortInfoParams {
  nameOrInn?: string;
  id?: string;
}

export const participantGetParticipantShortInfoParamsAdapter = {
  adapt(params?: ParticipantGetParticipantShortInfoParams): ParticipantGetParticipantShortInfo$Params {
    if (!params) {
      return {} as ParticipantGetParticipantShortInfo$Params;
    }
    return {
      nameOrInn: params.nameOrInn,
      id: params.id,
    };
  }
};
