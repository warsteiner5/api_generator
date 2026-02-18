import { OrderGetSentToParticipantOrderCount$Params } from '../../../swagger/fn/order/order-get-sent-to-participant-order-count';

export interface OrderGetSentToParticipantOrderCountParams {
}

export const orderGetSentToParticipantOrderCountParamsAdapter = {
  adapt(params?: OrderGetSentToParticipantOrderCountParams): OrderGetSentToParticipantOrderCount$Params {
    if (!params) {
      return {} as OrderGetSentToParticipantOrderCount$Params;
    }
    return {
    };
  }
};
