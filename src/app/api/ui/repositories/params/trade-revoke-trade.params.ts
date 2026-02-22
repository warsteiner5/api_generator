import { Cancellation } from '../../models/cancellation.interface';
import { TradeRevokeTrade$Params } from '../../../swagger/fn/trade/trade-revoke-trade';
import { apiCancellationDtoAdapter } from '../../adapters/models/api-cancellation-dto.adapter';

// @ts-ignore
export interface TradeRevokeTradeParams {
  id: number;
  body?: Cancellation;
}

export function tradeRevokeTradeAdapter(params?: TradeRevokeTradeParams): TradeRevokeTrade$Params {
  if (!params) {
    return {} as TradeRevokeTrade$Params;
  }
  return {
      id: params.id,
      body: apiCancellationDtoAdapter(params.body),
  };
}
