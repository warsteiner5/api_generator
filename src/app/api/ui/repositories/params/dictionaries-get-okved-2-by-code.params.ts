import { DictionariesGetOkved2ByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-by-code';

export interface DictionariesGetOkved2ByCodeParams {
  code: string;
}

export const dictionariesGetOkved2ByCodeParamsAdapter = {
  adapt(params?: DictionariesGetOkved2ByCodeParams): DictionariesGetOkved2ByCode$Params {
    if (!params) {
      return {} as DictionariesGetOkved2ByCode$Params;
    }
    return {
      code: params.code,
    };
  }
};
