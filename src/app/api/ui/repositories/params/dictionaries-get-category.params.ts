import { DictionariesGetCategory$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category';

// @ts-ignore
export interface DictionariesGetCategoryParams {
  code: string;
}

export function dictionariesGetCategoryAdapter(params?: DictionariesGetCategoryParams): DictionariesGetCategory$Params {
  if (!params) {
    return {} as DictionariesGetCategory$Params;
  }
  return {
      code: params.code,
  };
}
