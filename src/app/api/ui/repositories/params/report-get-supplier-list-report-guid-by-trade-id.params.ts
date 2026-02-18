import { ReportGetSupplierListReportGuidByTradeId$Params } from '../../../swagger/fn/report/report-get-supplier-list-report-guid-by-trade-id';

export interface ReportGetSupplierListReportGuidByTradeIdParams {
  tradeId: number;
}

export const reportGetSupplierListReportGuidByTradeIdParamsAdapter = {
  adapt(params?: ReportGetSupplierListReportGuidByTradeIdParams): ReportGetSupplierListReportGuidByTradeId$Params {
    if (!params) {
      return {} as ReportGetSupplierListReportGuidByTradeId$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
