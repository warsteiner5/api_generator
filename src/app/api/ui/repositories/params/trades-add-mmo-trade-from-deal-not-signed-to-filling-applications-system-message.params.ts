import { TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message';

// @ts-ignore
export interface TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams {
  tradeId: number;
}

export function tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageAdapter(params?: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams): TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params {
  if (!params) {
    return {} as TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
