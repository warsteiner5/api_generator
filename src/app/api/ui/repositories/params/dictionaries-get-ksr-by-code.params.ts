import { DictionariesGetKsrByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-by-code';

// @ts-ignore
export interface DictionariesGetKsrByCodeParams {
  code: string;
}

export function dictionariesGetKsrByCodeAdapter(params?: DictionariesGetKsrByCodeParams): DictionariesGetKsrByCode$Params {
  if (!params) {
    return {} as DictionariesGetKsrByCode$Params;
  }
  return {
      code: params.code,
  };
}
