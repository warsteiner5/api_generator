import { ModeratorStop$Params } from '../../../swagger/fn/moderator/moderator-stop';

// @ts-ignore
export interface ModeratorStopParams {
  id: number;
}

export function moderatorStopAdapter(params?: ModeratorStopParams): ModeratorStop$Params {
  if (!params) {
    return {} as ModeratorStop$Params;
  }
  return {
      id: params.id,
  };
}
