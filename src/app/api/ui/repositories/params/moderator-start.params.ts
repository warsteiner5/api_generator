import { ModeratorStart$Params } from '../../../swagger/fn/moderator/moderator-start';

export interface ModeratorStartParams {
  id: number;
}

export const moderatorStartParamsAdapter = {
  adapt(params?: ModeratorStartParams): ModeratorStart$Params {
    if (!params) {
      return {} as ModeratorStart$Params;
    }
    return {
      id: params.id,
    };
  }
};
