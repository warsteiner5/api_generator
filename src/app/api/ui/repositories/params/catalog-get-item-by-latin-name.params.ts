import { CatalogGetItemByLatinName$Params } from '../../../swagger/fn/catalog/catalog-get-item-by-latin-name';

// @ts-ignore
export interface CatalogGetItemByLatinNameParams {
  transliteratedValue: string;
}

export function catalogGetItemByLatinNameAdapter(params?: CatalogGetItemByLatinNameParams): CatalogGetItemByLatinName$Params {
  if (!params) {
    return {} as CatalogGetItemByLatinName$Params;
  }
  return {
      transliteratedValue: params.transliteratedValue,
  };
}
