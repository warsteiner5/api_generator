import { CatalogTransliteAllEmpty$Params } from '../../../swagger/fn/catalog/catalog-translite-all-empty';

export interface CatalogTransliteAllEmptyParams {
}

export const catalogTransliteAllEmptyParamsAdapter = {
  adapt(params?: CatalogTransliteAllEmptyParams): CatalogTransliteAllEmpty$Params {
    if (!params) {
      return {} as CatalogTransliteAllEmpty$Params;
    }
    return {
    };
  }
};
