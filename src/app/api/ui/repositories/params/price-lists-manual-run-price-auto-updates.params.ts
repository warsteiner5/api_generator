import { PriceListsManualRunPriceAutoUpdates$Params } from '../../../swagger/fn/price-lists/price-lists-manual-run-price-auto-updates';

export interface PriceListsManualRunPriceAutoUpdatesParams {
  id: number;
}

export const priceListsManualRunPriceAutoUpdatesParamsAdapter = {
  adapt(params?: PriceListsManualRunPriceAutoUpdatesParams): PriceListsManualRunPriceAutoUpdates$Params {
    if (!params) {
      return {} as PriceListsManualRunPriceAutoUpdates$Params;
    }
    return {
      id: params.id,
    };
  }
};
