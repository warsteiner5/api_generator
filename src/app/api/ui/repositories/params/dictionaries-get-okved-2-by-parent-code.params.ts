import { DictionariesGetOkved2ByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-by-parent-code';

export interface DictionariesGetOkved2ByParentCodeParams {
  parentCode?: string;
}

export const dictionariesGetOkved2ByParentCodeParamsAdapter = {
  adapt(params?: DictionariesGetOkved2ByParentCodeParams): DictionariesGetOkved2ByParentCode$Params {
    if (!params) {
      return {} as DictionariesGetOkved2ByParentCode$Params;
    }
    return {
      parentCode: params.parentCode,
    };
  }
};
