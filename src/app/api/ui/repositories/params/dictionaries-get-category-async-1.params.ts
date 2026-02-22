import { DictionariesGetCategoryAsync1$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category-async-1';

// @ts-ignore
export interface DictionariesGetCategoryAsync1Params {
  predicate: string;
}

export function dictionariesGetCategoryAsync1Adapter(params?: DictionariesGetCategoryAsync1Params): DictionariesGetCategoryAsync1$Params {
  if (!params) {
    return {} as DictionariesGetCategoryAsync1$Params;
  }
  return {
      predicate: params.predicate,
  };
}
