import { CatalogGetItemsByParent$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-parent';

// @ts-ignore
export interface CatalogGetItemsByParentParams {
  parentId: number;
}

export function catalogGetItemsByParentAdapter(params?: CatalogGetItemsByParentParams): CatalogGetItemsByParent$Params {
  if (!params) {
    return {} as CatalogGetItemsByParent$Params;
  }
  return {
      parentId: params.parentId,
  };
}
