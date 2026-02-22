import { DictionariesGetRegistries$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-registries';

// @ts-ignore
export interface DictionariesGetRegistriesParams {
  countryCode: string;
}

export function dictionariesGetRegistriesAdapter(params?: DictionariesGetRegistriesParams): DictionariesGetRegistries$Params {
  if (!params) {
    return {} as DictionariesGetRegistries$Params;
  }
  return {
      countryCode: params.countryCode,
  };
}
