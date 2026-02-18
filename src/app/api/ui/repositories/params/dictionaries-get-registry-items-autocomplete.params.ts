import { DictionariesGetRegistryItemsAutocomplete$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-registry-items-autocomplete';
import { ManufacturerCountryRegistryTypeEnum } from '../../enums/manufacturer-country-registry-type.enum';
import { adaptApiManufacturerCountryRegistryTypeEnum } from '../../adapters/toDto/api-manufacturer-country-registry-type-enum.adapter';

export interface DictionariesGetRegistryItemsAutocompleteParams {
  type: ManufacturerCountryRegistryTypeEnum;
  searchValue: string;
  maxReturnCount: number;
}

export const dictionariesGetRegistryItemsAutocompleteParamsAdapter = {
  adapt(params?: DictionariesGetRegistryItemsAutocompleteParams): DictionariesGetRegistryItemsAutocomplete$Params {
    if (!params) {
      return {} as DictionariesGetRegistryItemsAutocomplete$Params;
    }
    return {
      type: adaptApiManufacturerCountryRegistryTypeEnum(params.type),
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
    };
  }
};
