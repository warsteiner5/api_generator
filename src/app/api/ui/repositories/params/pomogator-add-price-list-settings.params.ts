import { PomogatorAddPriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-price-list-settings';
import { PriceListSettingsAdd } from '../../models/price-list-settings-add.interface';
import { apiPriceListSettingsAddDtoAdapter } from '../../adapters/models/api-price-list-settings-add-dto.adapter';

// @ts-ignore
export interface PomogatorAddPriceListSettingsParams {
  body?: PriceListSettingsAdd;
}

export function pomogatorAddPriceListSettingsAdapter(params?: PomogatorAddPriceListSettingsParams): PomogatorAddPriceListSettings$Params {
  if (!params) {
    return {} as PomogatorAddPriceListSettings$Params;
  }
  return {
      body: apiPriceListSettingsAddDtoAdapter(params.body),
  };
}
