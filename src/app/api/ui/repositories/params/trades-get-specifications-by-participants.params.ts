import { TradesGetSpecificationsByParticipants$Params } from '../../../swagger/fn/trades/trades-get-specifications-by-participants';

// @ts-ignore
export interface TradesGetSpecificationsByParticipantsParams {
  tradeId: number;
}

export function tradesGetSpecificationsByParticipantsAdapter(params?: TradesGetSpecificationsByParticipantsParams): TradesGetSpecificationsByParticipants$Params {
  if (!params) {
    return {} as TradesGetSpecificationsByParticipants$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
