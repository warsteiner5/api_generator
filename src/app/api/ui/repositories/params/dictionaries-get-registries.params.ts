import { DictionariesGetRegistries$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-registries';

export interface DictionariesGetRegistriesParams {
  countryCode: string;
}

export const dictionariesGetRegistriesParamsAdapter = {
  adapt(params?: DictionariesGetRegistriesParams): DictionariesGetRegistries$Params {
    if (!params) {
      return {} as DictionariesGetRegistries$Params;
    }
    return {
      countryCode: params.countryCode,
    };
  }
};
