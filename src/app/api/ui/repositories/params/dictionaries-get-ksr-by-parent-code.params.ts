import { DictionariesGetKsrByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-by-parent-code';

export interface DictionariesGetKsrByParentCodeParams {
  parentCode: string;
}

export const dictionariesGetKsrByParentCodeParamsAdapter = {
  adapt(params?: DictionariesGetKsrByParentCodeParams): DictionariesGetKsrByParentCode$Params {
    if (!params) {
      return {} as DictionariesGetKsrByParentCode$Params;
    }
    return {
      parentCode: params.parentCode,
    };
  }
};
