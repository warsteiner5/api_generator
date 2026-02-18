import { DictionariesGetKladrRegionListGet2$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-kladr-region-list-get-2';

export interface DictionariesGetKladrRegionListGet2Params {
  code: string;
}

export const dictionariesGetKladrRegionListGet2ParamsAdapter = {
  adapt(params?: DictionariesGetKladrRegionListGet2Params): DictionariesGetKladrRegionListGet2$Params {
    if (!params) {
      return {} as DictionariesGetKladrRegionListGet2$Params;
    }
    return {
      code: params.code,
    };
  }
};
