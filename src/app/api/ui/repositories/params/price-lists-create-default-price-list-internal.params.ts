import { GetOrCreateDefaultPriceListRequestAlt } from '../../models/get-or-create-default-price-list-request-alt.interface';
import { PriceListsCreateDefaultPriceListInternal$Params } from '../../../swagger/fn/price-lists/price-lists-create-default-price-list-internal';
import { adaptApiGetOrCreateDefaultPriceListRequestAltDto } from '../../adapters/toDto/api-get-or-create-default-price-list-request.adapter';

export interface PriceListsCreateDefaultPriceListInternalParams {
  body?: GetOrCreateDefaultPriceListRequestAlt;
}

export const priceListsCreateDefaultPriceListInternalParamsAdapter = {
  adapt(params?: PriceListsCreateDefaultPriceListInternalParams): PriceListsCreateDefaultPriceListInternal$Params {
    if (!params) {
      return {} as PriceListsCreateDefaultPriceListInternal$Params;
    }
    return {
      body: adaptApiGetOrCreateDefaultPriceListRequestAltDto(params.body),
    };
  }
};
