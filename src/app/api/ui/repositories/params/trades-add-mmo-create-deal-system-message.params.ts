import { TradesAddMmoCreateDealSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-create-deal-system-message';

// @ts-ignore
export interface TradesAddMmoCreateDealSystemMessageParams {
  tradeId: number;
  discussionOwnerId: number;
}

export function tradesAddMmoCreateDealSystemMessageAdapter(params?: TradesAddMmoCreateDealSystemMessageParams): TradesAddMmoCreateDealSystemMessage$Params {
  if (!params) {
    return {} as TradesAddMmoCreateDealSystemMessage$Params;
  }
  return {
      tradeId: params.tradeId,
      discussionOwnerId: params.discussionOwnerId,
  };
}
