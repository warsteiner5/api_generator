import { TradePrepareDataForTradeCreate$Params } from '../../../swagger/fn/trade/trade-prepare-data-for-trade-create';

export interface TradePrepareDataForTradeCreateParams {
  organizationId?: number;
}

export const tradePrepareDataForTradeCreateParamsAdapter = {
  adapt(params?: TradePrepareDataForTradeCreateParams): TradePrepareDataForTradeCreate$Params {
    if (!params) {
      return {} as TradePrepareDataForTradeCreate$Params;
    }
    return {
      organizationId: params.organizationId,
    };
  }
};
