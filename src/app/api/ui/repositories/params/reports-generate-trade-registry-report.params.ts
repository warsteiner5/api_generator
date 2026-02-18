import { ReportsGenerateTradeRegistryReport$Params } from '../../../swagger/fn/reports/reports-generate-trade-registry-report';
import { TradeRegistryReportParametersAlt } from '../../models/trade-registry-report-parameters-alt.interface';
import { adaptApiTradeRegistryReportParametersAltDto } from '../../adapters/toDto/api-trade-registry-report-parameters.adapter';

export interface ReportsGenerateTradeRegistryReportParams {
  body?: TradeRegistryReportParametersAlt;
}

export const reportsGenerateTradeRegistryReportParamsAdapter = {
  adapt(params?: ReportsGenerateTradeRegistryReportParams): ReportsGenerateTradeRegistryReport$Params {
    if (!params) {
      return {} as ReportsGenerateTradeRegistryReport$Params;
    }
    return {
      body: adaptApiTradeRegistryReportParametersAltDto(params.body),
    };
  }
};
