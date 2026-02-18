import { TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message';

export interface TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams {
  tradeId: number;
}

export const tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParamsAdapter = {
  adapt(params?: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams): TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params {
    if (!params) {
      return {} as TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
