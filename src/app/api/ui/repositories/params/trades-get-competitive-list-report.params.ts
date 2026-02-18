import { TradesGetCompetitiveListReport$Params } from '../../../swagger/fn/trades/trades-get-competitive-list-report';

export interface TradesGetCompetitiveListReportParams {
  tradeId: number;
}

export const tradesGetCompetitiveListReportParamsAdapter = {
  adapt(params?: TradesGetCompetitiveListReportParams): TradesGetCompetitiveListReport$Params {
    if (!params) {
      return {} as TradesGetCompetitiveListReport$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
