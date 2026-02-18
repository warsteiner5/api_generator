import { DictionariesGetCategoryByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category-by-parent-code';

export interface DictionariesGetCategoryByParentCodeParams {
  parentCode: string;
}

export const dictionariesGetCategoryByParentCodeParamsAdapter = {
  adapt(params?: DictionariesGetCategoryByParentCodeParams): DictionariesGetCategoryByParentCode$Params {
    if (!params) {
      return {} as DictionariesGetCategoryByParentCode$Params;
    }
    return {
      parentCode: params.parentCode,
    };
  }
};
