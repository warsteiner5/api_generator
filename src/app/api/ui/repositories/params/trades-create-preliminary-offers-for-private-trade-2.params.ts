import { ReturnTradeToFillingAppRequestAlt } from '../../models/return-trade-to-filling-app-request-alt.interface';
import { TradesCreatePreliminaryOffersForPrivateTrade2$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-for-private-trade-2';
import { adaptApiReturnTradeToFillingAppRequestAltDto } from '../../adapters/toDto/api-return-trade-to-filling-app-request.adapter';

export interface TradesCreatePreliminaryOffersForPrivateTrade2Params {
  body?: ReturnTradeToFillingAppRequestAlt;
}

export const tradesCreatePreliminaryOffersForPrivateTrade2ParamsAdapter = {
  adapt(params?: TradesCreatePreliminaryOffersForPrivateTrade2Params): TradesCreatePreliminaryOffersForPrivateTrade2$Params {
    if (!params) {
      return {} as TradesCreatePreliminaryOffersForPrivateTrade2$Params;
    }
    return {
      body: adaptApiReturnTradeToFillingAppRequestAltDto(params.body),
    };
  }
};
