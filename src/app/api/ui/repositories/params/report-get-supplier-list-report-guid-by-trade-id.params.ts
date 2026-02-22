import { ReportGetSupplierListReportGuidByTradeId$Params } from '../../../swagger/fn/report/report-get-supplier-list-report-guid-by-trade-id';

// @ts-ignore
export interface ReportGetSupplierListReportGuidByTradeIdParams {
  tradeId: number;
}

export function reportGetSupplierListReportGuidByTradeIdAdapter(params?: ReportGetSupplierListReportGuidByTradeIdParams): ReportGetSupplierListReportGuidByTradeId$Params {
  if (!params) {
    return {} as ReportGetSupplierListReportGuidByTradeId$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
