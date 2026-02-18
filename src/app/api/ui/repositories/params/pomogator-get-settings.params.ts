import { PomogatorGetSettings$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings';

export interface PomogatorGetSettingsParams {
}

export const pomogatorGetSettingsParamsAdapter = {
  adapt(params?: PomogatorGetSettingsParams): PomogatorGetSettings$Params {
    if (!params) {
      return {} as PomogatorGetSettings$Params;
    }
    return {
    };
  }
};
