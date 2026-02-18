import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { ReportsGeneratePurchaseReport$Params } from '../../../swagger/fn/reports/reports-generate-purchase-report';
import { adaptApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../adapters/toDto/api-market-vip-analytics-purchase-report-request.adapter';

export interface ReportsGeneratePurchaseReportParams {
  body?: MarketVipAnalyticsPurchaseReportRequestAlt;
}

export const reportsGeneratePurchaseReportParamsAdapter = {
  adapt(params?: ReportsGeneratePurchaseReportParams): ReportsGeneratePurchaseReport$Params {
    if (!params) {
      return {} as ReportsGeneratePurchaseReport$Params;
    }
    return {
      body: adaptApiMarketVipAnalyticsPurchaseReportRequestAltDto(params.body),
    };
  }
};
