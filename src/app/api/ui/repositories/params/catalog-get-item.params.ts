import { CatalogGetItem$Params } from '../../../swagger/fn/catalog/catalog-get-item';

export interface CatalogGetItemParams {
  id: number;
}

export const catalogGetItemParamsAdapter = {
  adapt(params?: CatalogGetItemParams): CatalogGetItem$Params {
    if (!params) {
      return {} as CatalogGetItem$Params;
    }
    return {
      id: params.id,
    };
  }
};
