import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';
import { PriceListsManualPriceListUpdates$Params } from '../../../swagger/fn/price-lists/price-lists-manual-price-list-updates';
import { apiCreateOrUpdateAutoUpdateRequestAltDtoAdapter } from '../../adapters/models/api-create-or-update-auto-update-request.adapter';

// @ts-ignore
export interface PriceListsManualPriceListUpdatesParams {
  priceListId: number;
  body?: CreateOrUpdateAutoUpdateRequestAlt;
}

export function priceListsManualPriceListUpdatesAdapter(params?: PriceListsManualPriceListUpdatesParams): PriceListsManualPriceListUpdates$Params {
  if (!params) {
    return {} as PriceListsManualPriceListUpdates$Params;
  }
  return {
      priceListId: params.priceListId,
      body: apiCreateOrUpdateAutoUpdateRequestAltDtoAdapter(params.body),
  };
}
