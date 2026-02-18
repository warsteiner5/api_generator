import { CatalogGetItemsByLevel$Params } from '../../../swagger/fn/catalog/catalog-get-items-by-level';

export interface CatalogGetItemsByLevelParams {
  level: number;
}

export const catalogGetItemsByLevelParamsAdapter = {
  adapt(params?: CatalogGetItemsByLevelParams): CatalogGetItemsByLevel$Params {
    if (!params) {
      return {} as CatalogGetItemsByLevel$Params;
    }
    return {
      level: params.level,
    };
  }
};
