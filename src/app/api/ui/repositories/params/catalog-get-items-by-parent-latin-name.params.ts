import { CatalogGetItemsByParentLatinName$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-parent-latin-name';

export interface CatalogGetItemsByParentLatinNameParams {
  parentTransliterate: string;
}

export const catalogGetItemsByParentLatinNameParamsAdapter = {
  adapt(params?: CatalogGetItemsByParentLatinNameParams): CatalogGetItemsByParentLatinName$Params {
    if (!params) {
      return {} as CatalogGetItemsByParentLatinName$Params;
    }
    return {
      parentTransliterate: params.parentTransliterate,
    };
  }
};
