import { DictionariesGetIndustries$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-industries';

export interface DictionariesGetIndustriesParams {
}

export const dictionariesGetIndustriesParamsAdapter = {
  adapt(params?: DictionariesGetIndustriesParams): DictionariesGetIndustries$Params {
    if (!params) {
      return {} as DictionariesGetIndustries$Params;
    }
    return {
    };
  }
};
