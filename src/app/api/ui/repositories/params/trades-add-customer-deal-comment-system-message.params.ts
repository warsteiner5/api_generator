import { TradesAddCustomerDealCommentSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-customer-deal-comment-system-message';

export interface TradesAddCustomerDealCommentSystemMessageParams {
  id: number;
  chatOwnerId: number;
}

export const tradesAddCustomerDealCommentSystemMessageParamsAdapter = {
  adapt(params?: TradesAddCustomerDealCommentSystemMessageParams): TradesAddCustomerDealCommentSystemMessage$Params {
    if (!params) {
      return {} as TradesAddCustomerDealCommentSystemMessage$Params;
    }
    return {
      id: params.id,
      chatOwnerId: params.chatOwnerId,
    };
  }
};
