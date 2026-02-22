import { ApiTradeRegistryReportParametersAltDto } from '../../../swagger/models/api-trade-registry-report-parameters';
import { TradeRegistryReportParametersAlt } from '../../models/trade-registry-report-parameters-alt.interface';

export const tradeRegistryReportParametersAltAdapter = (source?: ApiTradeRegistryReportParametersAltDto | null): TradeRegistryReportParametersAlt => {
  return {
    endPeriodDate: source?.EndPeriodDate,
    startPeriodDate: source?.StartPeriodDate,
  };
}
