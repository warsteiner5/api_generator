import { ApiTradeRegistryReportParametersAltDto } from '../../../swagger/models/api-trade-registry-report-parameters';
import { TradeRegistryReportParametersAlt } from '../../models/trade-registry-report-parameters-alt.interface';

export function adaptTradeRegistryReportParametersAltToUI(source?: ApiTradeRegistryReportParametersAltDto | null): TradeRegistryReportParametersAlt {
  return {
    endPeriodDate: source?.EndPeriodDate ?? '',
    startPeriodDate: source?.StartPeriodDate ?? '',
  };
}
