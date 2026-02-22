import { ReportSuppliersListParametersAlt } from '../../models/report-suppliers-list-parameters-alt.interface';
import { ApiReportSuppliersListParametersAltDto } from '../../../swagger/models/api-report-suppliers-list-parameters';

export const apiReportSuppliersListParametersAltDtoAdapter = (source?: ReportSuppliersListParametersAlt | null): ApiReportSuppliersListParametersAltDto => {
  return {
    TradeId: source?.tradeId,
  };
}
