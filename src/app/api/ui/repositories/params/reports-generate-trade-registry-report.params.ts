import { ReportsGenerateTradeRegistryReport$Params } from '../../../swagger/fn/reports/reports-generate-trade-registry-report';
import { TradeRegistryReportParametersAlt } from '../../models/trade-registry-report-parameters-alt.interface';
import { apiTradeRegistryReportParametersAltDtoAdapter } from '../../adapters/models/api-trade-registry-report-parameters.adapter';

// @ts-ignore
export interface ReportsGenerateTradeRegistryReportParams {
  body?: TradeRegistryReportParametersAlt;
}

export function reportsGenerateTradeRegistryReportAdapter(params?: ReportsGenerateTradeRegistryReportParams): ReportsGenerateTradeRegistryReport$Params {
  if (!params) {
    return {} as ReportsGenerateTradeRegistryReport$Params;
  }
  return {
      body: apiTradeRegistryReportParametersAltDtoAdapter(params.body),
  };
}
