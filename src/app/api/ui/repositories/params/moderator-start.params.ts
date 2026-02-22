import { ModeratorStart$Params } from '../../../swagger/fn/moderator/moderator-start';

// @ts-ignore
export interface ModeratorStartParams {
  id: number;
}

export function moderatorStartAdapter(params?: ModeratorStartParams): ModeratorStart$Params {
  if (!params) {
    return {} as ModeratorStart$Params;
  }
  return {
      id: params.id,
  };
}
