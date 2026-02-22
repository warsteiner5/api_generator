import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { ReportsGeneratePurchaseReport$Params } from '../../../swagger/fn/reports/reports-generate-purchase-report';
import { apiMarketVipAnalyticsPurchaseReportRequestAltDtoAdapter } from '../../adapters/models/api-market-vip-analytics-purchase-report-request.adapter';

// @ts-ignore
export interface ReportsGeneratePurchaseReportParams {
  body?: MarketVipAnalyticsPurchaseReportRequestAlt;
}

export function reportsGeneratePurchaseReportAdapter(params?: ReportsGeneratePurchaseReportParams): ReportsGeneratePurchaseReport$Params {
  if (!params) {
    return {} as ReportsGeneratePurchaseReport$Params;
  }
  return {
      body: apiMarketVipAnalyticsPurchaseReportRequestAltDtoAdapter(params.body),
  };
}
