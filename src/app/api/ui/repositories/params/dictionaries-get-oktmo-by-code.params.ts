import { DictionariesGetOktmoByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-oktmo-by-code';

export interface DictionariesGetOktmoByCodeParams {
  code: string;
}

export const dictionariesGetOktmoByCodeParamsAdapter = {
  adapt(params?: DictionariesGetOktmoByCodeParams): DictionariesGetOktmoByCode$Params {
    if (!params) {
      return {} as DictionariesGetOktmoByCode$Params;
    }
    return {
      code: params.code,
    };
  }
};
