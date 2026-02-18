import { PomogatorGetSettingsExistFlag$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-exist-flag';

export interface PomogatorGetSettingsExistFlagParams {
}

export const pomogatorGetSettingsExistFlagParamsAdapter = {
  adapt(params?: PomogatorGetSettingsExistFlagParams): PomogatorGetSettingsExistFlag$Params {
    if (!params) {
      return {} as PomogatorGetSettingsExistFlag$Params;
    }
    return {
    };
  }
};
