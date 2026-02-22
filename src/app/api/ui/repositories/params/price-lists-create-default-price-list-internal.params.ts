import { GetOrCreateDefaultPriceListRequestAlt } from '../../models/get-or-create-default-price-list-request-alt.interface';
import { PriceListsCreateDefaultPriceListInternal$Params } from '../../../swagger/fn/price-lists/price-lists-create-default-price-list-internal';
import { apiGetOrCreateDefaultPriceListRequestAltDtoAdapter } from '../../adapters/models/api-get-or-create-default-price-list-request.adapter';

// @ts-ignore
export interface PriceListsCreateDefaultPriceListInternalParams {
  body?: GetOrCreateDefaultPriceListRequestAlt;
}

export function priceListsCreateDefaultPriceListInternalAdapter(params?: PriceListsCreateDefaultPriceListInternalParams): PriceListsCreateDefaultPriceListInternal$Params {
  if (!params) {
    return {} as PriceListsCreateDefaultPriceListInternal$Params;
  }
  return {
      body: apiGetOrCreateDefaultPriceListRequestAltDtoAdapter(params.body),
  };
}
