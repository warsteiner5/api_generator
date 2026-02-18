import { ModeratorStop$Params } from '../../../swagger/fn/moderator/moderator-stop';

export interface ModeratorStopParams {
  id: number;
}

export const moderatorStopParamsAdapter = {
  adapt(params?: ModeratorStopParams): ModeratorStop$Params {
    if (!params) {
      return {} as ModeratorStop$Params;
    }
    return {
      id: params.id,
    };
  }
};
