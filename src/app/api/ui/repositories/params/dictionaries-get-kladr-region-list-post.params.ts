import { DictionariesGetKladrRegionListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-kladr-region-list-post';

export interface DictionariesGetKladrRegionListPostParams {
  body?: string[];
}

export const dictionariesGetKladrRegionListPostParamsAdapter = {
  adapt(params?: DictionariesGetKladrRegionListPostParams): DictionariesGetKladrRegionListPost$Params {
    if (!params) {
      return {} as DictionariesGetKladrRegionListPost$Params;
    }
    return {
      body: params.body,
    };
  }
};
