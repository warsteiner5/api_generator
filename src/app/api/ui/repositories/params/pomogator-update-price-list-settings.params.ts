import { PomogatorUpdatePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-update-price-list-settings';
import { PriceListSettingsUpdate } from '../../models/price-list-settings-update.interface';
import { apiPriceListSettingsUpdateDtoAdapter } from '../../adapters/models/api-price-list-settings-update-dto.adapter';

// @ts-ignore
export interface PomogatorUpdatePriceListSettingsParams {
  body?: PriceListSettingsUpdate;
}

export function pomogatorUpdatePriceListSettingsAdapter(params?: PomogatorUpdatePriceListSettingsParams): PomogatorUpdatePriceListSettings$Params {
  if (!params) {
    return {} as PomogatorUpdatePriceListSettings$Params;
  }
  return {
      body: apiPriceListSettingsUpdateDtoAdapter(params.body),
  };
}
