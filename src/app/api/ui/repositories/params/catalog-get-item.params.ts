import { CatalogGetItem$Params } from '../../../swagger/fn/catalog/catalog-get-item';

// @ts-ignore
export interface CatalogGetItemParams {
  id: number;
}

export function catalogGetItemAdapter(params?: CatalogGetItemParams): CatalogGetItem$Params {
  if (!params) {
    return {} as CatalogGetItem$Params;
  }
  return {
      id: params.id,
  };
}
