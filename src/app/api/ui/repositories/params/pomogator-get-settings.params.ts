import { PomogatorGetSettings$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings';

// @ts-ignore
export interface PomogatorGetSettingsParams {
}

export function pomogatorGetSettingsAdapter(params?: PomogatorGetSettingsParams): PomogatorGetSettings$Params {
  if (!params) {
    return {} as PomogatorGetSettings$Params;
  }
  return {
  };
}
