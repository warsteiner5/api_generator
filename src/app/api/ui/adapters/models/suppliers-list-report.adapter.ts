import { ApiSuppliersListReportDto } from '../../../swagger/models/api-suppliers-list-report-dto';
import { SuppliersListReport } from '../../models/suppliers-list-report.interface';

export const suppliersListReportAdapter = (source?: ApiSuppliersListReportDto | null): SuppliersListReport => {
  return {
    inProgress: source?.InProgress,
    reportGuid: source?.ReportGuid,
  };
}
