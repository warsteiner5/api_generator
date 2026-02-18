import { TradesGetFiles$Params } from '../../../swagger/fn/trades/trades-get-files';

export interface TradesGetFilesParams {
  tradeId: number;
}

export const tradesGetFilesParamsAdapter = {
  adapt(params?: TradesGetFilesParams): TradesGetFiles$Params {
    if (!params) {
      return {} as TradesGetFiles$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
