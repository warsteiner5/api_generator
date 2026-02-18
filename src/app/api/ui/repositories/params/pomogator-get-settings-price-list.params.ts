import { PomogatorGetSettingsPriceList$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-price-list';

export interface PomogatorGetSettingsPriceListParams {
  id: number;
}

export const pomogatorGetSettingsPriceListParamsAdapter = {
  adapt(params?: PomogatorGetSettingsPriceListParams): PomogatorGetSettingsPriceList$Params {
    if (!params) {
      return {} as PomogatorGetSettingsPriceList$Params;
    }
    return {
      id: params.id,
    };
  }
};
