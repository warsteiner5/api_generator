import { TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message';

// @ts-ignore
export interface TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams {
  tradeId: number;
  dealId: number;
}

export function tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageAdapter(params?: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams): TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params {
  if (!params) {
    return {} as TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params;
  }
  return {
      tradeId: params.tradeId,
      dealId: params.dealId,
  };
}
