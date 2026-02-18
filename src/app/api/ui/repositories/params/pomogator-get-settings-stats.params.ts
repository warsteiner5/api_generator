import { PomogatorGetSettingsStats$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-stats';

export interface PomogatorGetSettingsStatsParams {
}

export const pomogatorGetSettingsStatsParamsAdapter = {
  adapt(params?: PomogatorGetSettingsStatsParams): PomogatorGetSettingsStats$Params {
    if (!params) {
      return {} as PomogatorGetSettingsStats$Params;
    }
    return {
    };
  }
};
