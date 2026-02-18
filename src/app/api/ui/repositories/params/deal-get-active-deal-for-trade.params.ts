import { DealGetActiveDealForTrade$Params } from '../../../swagger/fn/deal/deal-get-active-deal-for-trade';

export interface DealGetActiveDealForTradeParams {
  id: number;
}

export const dealGetActiveDealForTradeParamsAdapter = {
  adapt(params?: DealGetActiveDealForTradeParams): DealGetActiveDealForTrade$Params {
    if (!params) {
      return {} as DealGetActiveDealForTrade$Params;
    }
    return {
      id: params.id,
    };
  }
};
