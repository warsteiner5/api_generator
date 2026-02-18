import { DictionariesGetKsrByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-by-code';

export interface DictionariesGetKsrByCodeParams {
  code: string;
}

export const dictionariesGetKsrByCodeParamsAdapter = {
  adapt(params?: DictionariesGetKsrByCodeParams): DictionariesGetKsrByCode$Params {
    if (!params) {
      return {} as DictionariesGetKsrByCode$Params;
    }
    return {
      code: params.code,
    };
  }
};
