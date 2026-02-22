import { DictionariesGetKladrRegionListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-kladr-region-list-post';

// @ts-ignore
export interface DictionariesGetKladrRegionListPostParams {
  body?: string[];
}

export function dictionariesGetKladrRegionListPostAdapter(params?: DictionariesGetKladrRegionListPostParams): DictionariesGetKladrRegionListPost$Params {
  if (!params) {
    return {} as DictionariesGetKladrRegionListPost$Params;
  }
  return {
      body: params.body,
  };
}
