import { ApiReportSuppliersListParametersAltDto } from '../../../swagger/models/api-report-suppliers-list-parameters';
import { ReportSuppliersListParametersAlt } from '../../models/report-suppliers-list-parameters-alt.interface';

export function adaptReportSuppliersListParametersAltToUI(source?: ApiReportSuppliersListParametersAltDto | null): ReportSuppliersListParametersAlt {
  return {
    tradeId: source?.TradeId ?? 0,
  };
}
