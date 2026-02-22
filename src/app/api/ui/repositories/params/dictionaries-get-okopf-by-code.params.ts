import { DictionariesGetOkopfByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okopf-by-code';

// @ts-ignore
export interface DictionariesGetOkopfByCodeParams {
  code: string;
}

export function dictionariesGetOkopfByCodeAdapter(params?: DictionariesGetOkopfByCodeParams): DictionariesGetOkopfByCode$Params {
  if (!params) {
    return {} as DictionariesGetOkopfByCode$Params;
  }
  return {
      code: params.code,
  };
}
