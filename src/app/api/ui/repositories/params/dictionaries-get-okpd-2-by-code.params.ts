import { DictionariesGetOkpd2ByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okpd-2-by-code';

// @ts-ignore
export interface DictionariesGetOkpd2ByCodeParams {
  code: string;
}

export function dictionariesGetOkpd2ByCodeAdapter(params?: DictionariesGetOkpd2ByCodeParams): DictionariesGetOkpd2ByCode$Params {
  if (!params) {
    return {} as DictionariesGetOkpd2ByCode$Params;
  }
  return {
      code: params.code,
  };
}
