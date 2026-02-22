import { PriceListsBindPriceListToOrganization$Params } from '../../../swagger/fn/price-lists/price-lists-bind-price-list-to-organization';

// @ts-ignore
export interface PriceListsBindPriceListToOrganizationParams {
  id: number;
  idOrganization: number;
}

export function priceListsBindPriceListToOrganizationAdapter(params?: PriceListsBindPriceListToOrganizationParams): PriceListsBindPriceListToOrganization$Params {
  if (!params) {
    return {} as PriceListsBindPriceListToOrganization$Params;
  }
  return {
      id: params.id,
      idOrganization: params.idOrganization,
  };
}
