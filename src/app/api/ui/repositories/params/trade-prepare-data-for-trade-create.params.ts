import { TradePrepareDataForTradeCreate$Params } from '../../../swagger/fn/trade/trade-prepare-data-for-trade-create';

// @ts-ignore
export interface TradePrepareDataForTradeCreateParams {
  organizationId?: number;
}

export function tradePrepareDataForTradeCreateAdapter(params?: TradePrepareDataForTradeCreateParams): TradePrepareDataForTradeCreate$Params {
  if (!params) {
    return {} as TradePrepareDataForTradeCreate$Params;
  }
  return {
      organizationId: params.organizationId,
  };
}
