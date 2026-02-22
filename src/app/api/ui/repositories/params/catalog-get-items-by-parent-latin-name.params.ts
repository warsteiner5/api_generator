import { CatalogGetItemsByParentLatinName$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-parent-latin-name';

// @ts-ignore
export interface CatalogGetItemsByParentLatinNameParams {
  parentTransliterate: string;
}

export function catalogGetItemsByParentLatinNameAdapter(params?: CatalogGetItemsByParentLatinNameParams): CatalogGetItemsByParentLatinName$Params {
  if (!params) {
    return {} as CatalogGetItemsByParentLatinName$Params;
  }
  return {
      parentTransliterate: params.parentTransliterate,
  };
}
