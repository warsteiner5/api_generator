import { TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message';

export interface TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams {
  tradeId: number;
  dealId: number;
}

export const tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParamsAdapter = {
  adapt(params?: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams): TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params {
    if (!params) {
      return {} as TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params;
    }
    return {
      tradeId: params.tradeId,
      dealId: params.dealId,
    };
  }
};
