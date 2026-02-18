import { CatalogGetItemByLatinName$Params } from '../../../swagger/fn/catalog/catalog-get-item-by-latin-name';

export interface CatalogGetItemByLatinNameParams {
  transliteratedValue: string;
}

export const catalogGetItemByLatinNameParamsAdapter = {
  adapt(params?: CatalogGetItemByLatinNameParams): CatalogGetItemByLatinName$Params {
    if (!params) {
      return {} as CatalogGetItemByLatinName$Params;
    }
    return {
      transliteratedValue: params.transliteratedValue,
    };
  }
};
