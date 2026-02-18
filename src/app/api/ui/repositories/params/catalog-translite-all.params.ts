import { CatalogTransliteAll$Params } from '../../../swagger/fn/catalog/catalog-translite-all';

export interface CatalogTransliteAllParams {
}

export const catalogTransliteAllParamsAdapter = {
  adapt(params?: CatalogTransliteAllParams): CatalogTransliteAll$Params {
    if (!params) {
      return {} as CatalogTransliteAll$Params;
    }
    return {
    };
  }
};
