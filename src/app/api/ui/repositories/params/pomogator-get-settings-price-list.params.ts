import { PomogatorGetSettingsPriceList$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-price-list';

// @ts-ignore
export interface PomogatorGetSettingsPriceListParams {
  id: number;
}

export function pomogatorGetSettingsPriceListAdapter(params?: PomogatorGetSettingsPriceListParams): PomogatorGetSettingsPriceList$Params {
  if (!params) {
    return {} as PomogatorGetSettingsPriceList$Params;
  }
  return {
      id: params.id,
  };
}
