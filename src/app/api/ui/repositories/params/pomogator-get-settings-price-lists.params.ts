import { PomogatorGetSettingsPriceLists$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-price-lists';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface PomogatorGetSettingsPriceListsParams {
  body?: SearchObjectAlt;
}

export function pomogatorGetSettingsPriceListsAdapter(params?: PomogatorGetSettingsPriceListsParams): PomogatorGetSettingsPriceLists$Params {
  if (!params) {
    return {} as PomogatorGetSettingsPriceLists$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
