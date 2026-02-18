import { PomogatorUpdatePriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-update-price-list-settings';
import { PriceListSettingsUpdate } from '../../models/price-list-settings-update.interface';
import { adaptApiPriceListSettingsUpdateDto } from '../../adapters/toDto/api-price-list-settings-update-dto.adapter';

export interface PomogatorUpdatePriceListSettingsParams {
  body?: PriceListSettingsUpdate;
}

export const pomogatorUpdatePriceListSettingsParamsAdapter = {
  adapt(params?: PomogatorUpdatePriceListSettingsParams): PomogatorUpdatePriceListSettings$Params {
    if (!params) {
      return {} as PomogatorUpdatePriceListSettings$Params;
    }
    return {
      body: adaptApiPriceListSettingsUpdateDto(params.body),
    };
  }
};
