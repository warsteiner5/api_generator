import { DictionariesGetOkpd2ByCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okpd-2-by-code';

export interface DictionariesGetOkpd2ByCodeParams {
  code: string;
}

export const dictionariesGetOkpd2ByCodeParamsAdapter = {
  adapt(params?: DictionariesGetOkpd2ByCodeParams): DictionariesGetOkpd2ByCode$Params {
    if (!params) {
      return {} as DictionariesGetOkpd2ByCode$Params;
    }
    return {
      code: params.code,
    };
  }
};
