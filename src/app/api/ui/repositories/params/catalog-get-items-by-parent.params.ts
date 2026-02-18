import { CatalogGetItemsByParent$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-parent';

export interface CatalogGetItemsByParentParams {
  parentId: number;
}

export const catalogGetItemsByParentParamsAdapter = {
  adapt(params?: CatalogGetItemsByParentParams): CatalogGetItemsByParent$Params {
    if (!params) {
      return {} as CatalogGetItemsByParent$Params;
    }
    return {
      parentId: params.parentId,
    };
  }
};
