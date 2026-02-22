import { DictionariesGetOktmoByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-oktmo-by-code';

// @ts-ignore
export interface DictionariesGetOktmoByCodeParams {
  code: string;
}

export function dictionariesGetOktmoByCodeAdapter(params?: DictionariesGetOktmoByCodeParams): DictionariesGetOktmoByCode$Params {
  if (!params) {
    return {} as DictionariesGetOktmoByCode$Params;
  }
  return {
      code: params.code,
  };
}
