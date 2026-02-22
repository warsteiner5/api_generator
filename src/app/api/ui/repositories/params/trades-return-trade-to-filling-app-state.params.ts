import { ReturnTradeToFillingAppRequestAlt } from '../../models/return-trade-to-filling-app-request-alt.interface';
import { TradesReturnTradeToFillingAppState$Params } from '../../../swagger/fn/trades/trades-return-trade-to-filling-app-state';
import { apiReturnTradeToFillingAppRequestAltDtoAdapter } from '../../adapters/models/api-return-trade-to-filling-app-request.adapter';

// @ts-ignore
export interface TradesReturnTradeToFillingAppStateParams {
  body?: ReturnTradeToFillingAppRequestAlt;
}

export function tradesReturnTradeToFillingAppStateAdapter(params?: TradesReturnTradeToFillingAppStateParams): TradesReturnTradeToFillingAppState$Params {
  if (!params) {
    return {} as TradesReturnTradeToFillingAppState$Params;
  }
  return {
      body: apiReturnTradeToFillingAppRequestAltDtoAdapter(params.body),
  };
}
