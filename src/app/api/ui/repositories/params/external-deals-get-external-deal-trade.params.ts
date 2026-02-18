import { ExternalDealsGetExternalDealTrade$Params } from '../../../swagger/fn/external-deals/external-deals-get-external-deal-trade';

export interface ExternalDealsGetExternalDealTradeParams {
  tradeId: number;
}

export const externalDealsGetExternalDealTradeParamsAdapter = {
  adapt(params?: ExternalDealsGetExternalDealTradeParams): ExternalDealsGetExternalDealTrade$Params {
    if (!params) {
      return {} as ExternalDealsGetExternalDealTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
