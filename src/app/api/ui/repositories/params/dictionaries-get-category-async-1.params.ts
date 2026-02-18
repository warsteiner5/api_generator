import { DictionariesGetCategoryAsync1$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category-async-1';

export interface DictionariesGetCategoryAsync1Params {
  predicate: string;
}

export const dictionariesGetCategoryAsync1ParamsAdapter = {
  adapt(params?: DictionariesGetCategoryAsync1Params): DictionariesGetCategoryAsync1$Params {
    if (!params) {
      return {} as DictionariesGetCategoryAsync1$Params;
    }
    return {
      predicate: params.predicate,
    };
  }
};
