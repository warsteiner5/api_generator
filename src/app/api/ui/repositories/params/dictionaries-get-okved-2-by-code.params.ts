import { DictionariesGetOkved2ByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-by-code';

// @ts-ignore
export interface DictionariesGetOkved2ByCodeParams {
  code: string;
}

export function dictionariesGetOkved2ByCodeAdapter(params?: DictionariesGetOkved2ByCodeParams): DictionariesGetOkved2ByCode$Params {
  if (!params) {
    return {} as DictionariesGetOkved2ByCode$Params;
  }
  return {
      code: params.code,
  };
}
