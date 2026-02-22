import { PomogatorTogglePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-toggle-price-list-settings';
import { PriceListSettingsToggle } from '../../models/price-list-settings-toggle.interface';
import { apiPriceListSettingsToggleDtoAdapter } from '../../adapters/models/api-price-list-settings-toggle-dto.adapter';

// @ts-ignore
export interface PomogatorTogglePriceListSettingsParams {
  body?: PriceListSettingsToggle;
}

export function pomogatorTogglePriceListSettingsAdapter(params?: PomogatorTogglePriceListSettingsParams): PomogatorTogglePriceListSettings$Params {
  if (!params) {
    return {} as PomogatorTogglePriceListSettings$Params;
  }
  return {
      body: apiPriceListSettingsToggleDtoAdapter(params.body),
  };
}
