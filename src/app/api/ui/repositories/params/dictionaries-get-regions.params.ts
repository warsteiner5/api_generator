import { DictionariesGetRegions$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-regions';

export interface DictionariesGetRegionsParams {
}

export const dictionariesGetRegionsParamsAdapter = {
  adapt(params?: DictionariesGetRegionsParams): DictionariesGetRegions$Params {
    if (!params) {
      return {} as DictionariesGetRegions$Params;
    }
    return {
    };
  }
};
