import { PomogatorDeletePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-delete-price-list-settings';
import { PriceListSettingsDelete } from '../../models/price-list-settings-delete.interface';
import { apiPriceListSettingsDeleteDtoAdapter } from '../../adapters/models/api-price-list-settings-delete-dto.adapter';

// @ts-ignore
export interface PomogatorDeletePriceListSettingsParams {
  body?: PriceListSettingsDelete;
}

export function pomogatorDeletePriceListSettingsAdapter(params?: PomogatorDeletePriceListSettingsParams): PomogatorDeletePriceListSettings$Params {
  if (!params) {
    return {} as PomogatorDeletePriceListSettings$Params;
  }
  return {
      body: apiPriceListSettingsDeleteDtoAdapter(params.body),
  };
}
