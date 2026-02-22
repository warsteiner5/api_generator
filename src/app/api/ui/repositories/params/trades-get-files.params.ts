import { TradesGetFiles$Params } from '../../../swagger/fn/trades/trades-get-files';

// @ts-ignore
export interface TradesGetFilesParams {
  tradeId: number;
}

export function tradesGetFilesAdapter(params?: TradesGetFilesParams): TradesGetFiles$Params {
  if (!params) {
    return {} as TradesGetFiles$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
