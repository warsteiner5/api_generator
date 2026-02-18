import { DictionariesGetOrganizationCountries$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-organization-countries';

export interface DictionariesGetOrganizationCountriesParams {
}

export const dictionariesGetOrganizationCountriesParamsAdapter = {
  adapt(params?: DictionariesGetOrganizationCountriesParams): DictionariesGetOrganizationCountries$Params {
    if (!params) {
      return {} as DictionariesGetOrganizationCountries$Params;
    }
    return {
    };
  }
};
