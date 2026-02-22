import { CatalogGetItemsByLevel$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-level';

// @ts-ignore
export interface CatalogGetItemsByLevelParams {
  level: number;
}

export function catalogGetItemsByLevelAdapter(params?: CatalogGetItemsByLevelParams): CatalogGetItemsByLevel$Params {
  if (!params) {
    return {} as CatalogGetItemsByLevel$Params;
  }
  return {
      level: params.level,
  };
}
