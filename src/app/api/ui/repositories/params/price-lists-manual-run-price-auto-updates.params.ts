import { PriceListsManualRunPriceAutoUpdates$Params } from '../../../swagger/fn/price-lists/price-lists-manual-run-price-auto-updates';

// @ts-ignore
export interface PriceListsManualRunPriceAutoUpdatesParams {
  id: number;
}

export function priceListsManualRunPriceAutoUpdatesAdapter(params?: PriceListsManualRunPriceAutoUpdatesParams): PriceListsManualRunPriceAutoUpdates$Params {
  if (!params) {
    return {} as PriceListsManualRunPriceAutoUpdates$Params;
  }
  return {
      id: params.id,
  };
}
