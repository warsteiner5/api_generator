import { DictionariesGetKtruByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ktru-by-code';

// @ts-ignore
export interface DictionariesGetKtruByCodeParams {
  code: string;
  version: number;
}

export function dictionariesGetKtruByCodeAdapter(params?: DictionariesGetKtruByCodeParams): DictionariesGetKtruByCode$Params {
  if (!params) {
    return {} as DictionariesGetKtruByCode$Params;
  }
  return {
      code: params.code,
      version: params.version,
  };
}
