import { ReturnTradeToFillingAppRequestAlt } from '../../models/return-trade-to-filling-app-request-alt.interface';
import { TradesCreatePreliminaryOffersForPrivateTrade2$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-for-private-trade-2';
import { apiReturnTradeToFillingAppRequestAltDtoAdapter } from '../../adapters/models/api-return-trade-to-filling-app-request.adapter';

// @ts-ignore
export interface TradesCreatePreliminaryOffersForPrivateTrade2Params {
  body?: ReturnTradeToFillingAppRequestAlt;
}

export function tradesCreatePreliminaryOffersForPrivateTrade2Adapter(params?: TradesCreatePreliminaryOffersForPrivateTrade2Params): TradesCreatePreliminaryOffersForPrivateTrade2$Params {
  if (!params) {
    return {} as TradesCreatePreliminaryOffersForPrivateTrade2$Params;
  }
  return {
      body: apiReturnTradeToFillingAppRequestAltDtoAdapter(params.body),
  };
}
