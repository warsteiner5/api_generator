import { PomogatorDeletePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-delete-price-list-settings';
import { PriceListSettingsDelete } from '../../models/price-list-settings-delete.interface';
import { adaptApiPriceListSettingsDeleteDto } from '../../adapters/toDto/api-price-list-settings-delete-dto.adapter';

export interface PomogatorDeletePriceListSettingsParams {
  body?: PriceListSettingsDelete;
}

export const pomogatorDeletePriceListSettingsParamsAdapter = {
  adapt(params?: PomogatorDeletePriceListSettingsParams): PomogatorDeletePriceListSettings$Params {
    if (!params) {
      return {} as PomogatorDeletePriceListSettings$Params;
    }
    return {
      body: adaptApiPriceListSettingsDeleteDto(params.body),
    };
  }
};
