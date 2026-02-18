import { PomogatorTogglePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-toggle-price-list-settings';
import { PriceListSettingsToggle } from '../../models/price-list-settings-toggle.interface';
import { adaptApiPriceListSettingsToggleDto } from '../../adapters/toDto/api-price-list-settings-toggle-dto.adapter';

export interface PomogatorTogglePriceListSettingsParams {
  body?: PriceListSettingsToggle;
}

export const pomogatorTogglePriceListSettingsParamsAdapter = {
  adapt(params?: PomogatorTogglePriceListSettingsParams): PomogatorTogglePriceListSettings$Params {
    if (!params) {
      return {} as PomogatorTogglePriceListSettings$Params;
    }
    return {
      body: adaptApiPriceListSettingsToggleDto(params.body),
    };
  }
};
