import { TradesGetSpecificationsByParticipants$Params } from '../../../swagger/fn/trades/trades-get-specifications-by-participants';

export interface TradesGetSpecificationsByParticipantsParams {
  tradeId: number;
}

export const tradesGetSpecificationsByParticipantsParamsAdapter = {
  adapt(params?: TradesGetSpecificationsByParticipantsParams): TradesGetSpecificationsByParticipants$Params {
    if (!params) {
      return {} as TradesGetSpecificationsByParticipants$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
