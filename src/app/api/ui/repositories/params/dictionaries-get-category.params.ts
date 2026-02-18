import { DictionariesGetCategory$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-category';

export interface DictionariesGetCategoryParams {
  code: string;
}

export const dictionariesGetCategoryParamsAdapter = {
  adapt(params?: DictionariesGetCategoryParams): DictionariesGetCategory$Params {
    if (!params) {
      return {} as DictionariesGetCategory$Params;
    }
    return {
      code: params.code,
    };
  }
};
