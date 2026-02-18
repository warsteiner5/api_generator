import { TradesAddMmoCreateDealSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-create-deal-system-message';

export interface TradesAddMmoCreateDealSystemMessageParams {
  tradeId: number;
  discussionOwnerId: number;
}

export const tradesAddMmoCreateDealSystemMessageParamsAdapter = {
  adapt(params?: TradesAddMmoCreateDealSystemMessageParams): TradesAddMmoCreateDealSystemMessage$Params {
    if (!params) {
      return {} as TradesAddMmoCreateDealSystemMessage$Params;
    }
    return {
      tradeId: params.tradeId,
      discussionOwnerId: params.discussionOwnerId,
    };
  }
};
