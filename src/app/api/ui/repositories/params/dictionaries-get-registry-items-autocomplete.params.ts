import { DictionariesGetRegistryItemsAutocomplete$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-registry-items-autocomplete';
import { ManufacturerCountryRegistryTypeEnum } from '../../enums/manufacturer-country-registry-type.enum';
import { apiManufacturerCountryRegistryTypeEnumAdapter } from '../../adapters/enums/api-manufacturer-country-registry-type-enum.adapter';

// @ts-ignore
export interface DictionariesGetRegistryItemsAutocompleteParams {
  type: ManufacturerCountryRegistryTypeEnum;
  searchValue: string;
  maxReturnCount: number;
}

export function dictionariesGetRegistryItemsAutocompleteAdapter(params?: DictionariesGetRegistryItemsAutocompleteParams): DictionariesGetRegistryItemsAutocomplete$Params {
  if (!params) {
    return {} as DictionariesGetRegistryItemsAutocomplete$Params;
  }
  return {
      type: apiManufacturerCountryRegistryTypeEnumAdapter(params.type),
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
  };
}
