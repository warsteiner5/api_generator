import { DictionariesGetOkopfByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okopf-by-code';

export interface DictionariesGetOkopfByCodeParams {
  code: string;
}

export const dictionariesGetOkopfByCodeParamsAdapter = {
  adapt(params?: DictionariesGetOkopfByCodeParams): DictionariesGetOkopfByCode$Params {
    if (!params) {
      return {} as DictionariesGetOkopfByCode$Params;
    }
    return {
      code: params.code,
    };
  }
};
