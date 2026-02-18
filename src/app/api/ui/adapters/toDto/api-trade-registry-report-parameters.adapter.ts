import { TradeRegistryReportParametersAlt } from '../../models/trade-registry-report-parameters-alt.interface';
import { ApiTradeRegistryReportParametersAltDto } from '../../../swagger/models/api-trade-registry-report-parameters';

export function adaptApiTradeRegistryReportParametersAltDto(source?: TradeRegistryReportParametersAlt | null): ApiTradeRegistryReportParametersAltDto {
  return {
    EndPeriodDate: source?.endPeriodDate,
    StartPeriodDate: source?.startPeriodDate,
  };
}
