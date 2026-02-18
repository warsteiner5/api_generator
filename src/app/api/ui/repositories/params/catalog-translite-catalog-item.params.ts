import { CatalogTransliteCatalogItem$Params } from '../../../swagger/fn/catalog/catalog-translite-catalog-item';

export interface CatalogTransliteCatalogItemParams {
  id: number;
}

export const catalogTransliteCatalogItemParamsAdapter = {
  adapt(params?: CatalogTransliteCatalogItemParams): CatalogTransliteCatalogItem$Params {
    if (!params) {
      return {} as CatalogTransliteCatalogItem$Params;
    }
    return {
      id: params.id,
    };
  }
};
