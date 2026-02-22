import { TradesGetCompetitiveListReport$Params } from '../../../swagger/fn/trades/trades-get-competitive-list-report';

// @ts-ignore
export interface TradesGetCompetitiveListReportParams {
  tradeId: number;
}

export function tradesGetCompetitiveListReportAdapter(params?: TradesGetCompetitiveListReportParams): TradesGetCompetitiveListReport$Params {
  if (!params) {
    return {} as TradesGetCompetitiveListReport$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
