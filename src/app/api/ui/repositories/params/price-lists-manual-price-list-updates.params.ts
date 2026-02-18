import { CreateOrUpdateAutoUpdateRequestAlt } from '../../models/create-or-update-auto-update-request-alt.interface';
import { PriceListsManualPriceListUpdates$Params } from '../../../swagger/fn/price-lists/price-lists-manual-price-list-updates';
import { adaptApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../adapters/toDto/api-create-or-update-auto-update-request.adapter';

export interface PriceListsManualPriceListUpdatesParams {
  priceListId: number;
  body?: CreateOrUpdateAutoUpdateRequestAlt;
}

export const priceListsManualPriceListUpdatesParamsAdapter = {
  adapt(params?: PriceListsManualPriceListUpdatesParams): PriceListsManualPriceListUpdates$Params {
    if (!params) {
      return {} as PriceListsManualPriceListUpdates$Params;
    }
    return {
      priceListId: params.priceListId,
      body: adaptApiCreateOrUpdateAutoUpdateRequestAltDto(params.body),
    };
  }
};
