import { ApiSuppliersListReportResultDto } from '../../../swagger/models/api-suppliers-list-report-result-dto';
import { SuppliersListReportResult } from '../../models/suppliers-list-report-result.interface';

export const suppliersListReportResultAdapter = (source?: ApiSuppliersListReportResultDto | null): SuppliersListReportResult => {
  return {
    inProgress: source?.InProgress,
    reportUrl: source?.ReportUrl,
  };
}
