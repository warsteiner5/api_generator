import { PomogatorAddPriceListSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-price-list-settings';
import { PriceListSettingsAdd } from '../../models/price-list-settings-add.interface';
import { adaptApiPriceListSettingsAddDto } from '../../adapters/toDto/api-price-list-settings-add-dto.adapter';

export interface PomogatorAddPriceListSettingsParams {
  body?: PriceListSettingsAdd;
}

export const pomogatorAddPriceListSettingsParamsAdapter = {
  adapt(params?: PomogatorAddPriceListSettingsParams): PomogatorAddPriceListSettings$Params {
    if (!params) {
      return {} as PomogatorAddPriceListSettings$Params;
    }
    return {
      body: adaptApiPriceListSettingsAddDto(params.body),
    };
  }
};
