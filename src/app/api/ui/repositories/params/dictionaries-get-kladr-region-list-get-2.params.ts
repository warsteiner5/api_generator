import { DictionariesGetKladrRegionListGet2$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-kladr-region-list-get-2';

// @ts-ignore
export interface DictionariesGetKladrRegionListGet2Params {
  code: string;
}

export function dictionariesGetKladrRegionListGet2Adapter(params?: DictionariesGetKladrRegionListGet2Params): DictionariesGetKladrRegionListGet2$Params {
  if (!params) {
    return {} as DictionariesGetKladrRegionListGet2$Params;
  }
  return {
      code: params.code,
  };
}
