import { PomogatorGetSettingsPriceLists$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-price-lists';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface PomogatorGetSettingsPriceListsParams {
  body?: SearchObjectAlt;
}

export const pomogatorGetSettingsPriceListsParamsAdapter = {
  adapt(params?: PomogatorGetSettingsPriceListsParams): PomogatorGetSettingsPriceLists$Params {
    if (!params) {
      return {} as PomogatorGetSettingsPriceLists$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
