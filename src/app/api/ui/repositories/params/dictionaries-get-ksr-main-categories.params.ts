import { DictionariesGetKsrMainCategories$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-main-categories';

export interface DictionariesGetKsrMainCategoriesParams {
}

export const dictionariesGetKsrMainCategoriesParamsAdapter = {
  adapt(params?: DictionariesGetKsrMainCategoriesParams): DictionariesGetKsrMainCategories$Params {
    if (!params) {
      return {} as DictionariesGetKsrMainCategories$Params;
    }
    return {
    };
  }
};
