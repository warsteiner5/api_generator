import { DictionariesGetCategoryByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category-by-parent-code';

// @ts-ignore
export interface DictionariesGetCategoryByParentCodeParams {
  parentCode: string;
}

export function dictionariesGetCategoryByParentCodeAdapter(params?: DictionariesGetCategoryByParentCodeParams): DictionariesGetCategoryByParentCode$Params {
  if (!params) {
    return {} as DictionariesGetCategoryByParentCode$Params;
  }
  return {
      parentCode: params.parentCode,
  };
}
