import { CatalogTransliteCatalogItem$Params } from '../../../swagger/fn/catalog/catalog-translite-catalog-item';

// @ts-ignore
export interface CatalogTransliteCatalogItemParams {
  id: number;
}

export function catalogTransliteCatalogItemAdapter(params?: CatalogTransliteCatalogItemParams): CatalogTransliteCatalogItem$Params {
  if (!params) {
    return {} as CatalogTransliteCatalogItem$Params;
  }
  return {
      id: params.id,
  };
}
