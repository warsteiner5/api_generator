import { ApiSuppliersListReportDto } from '../../../swagger/models/api-suppliers-list-report-dto';
import { SuppliersListReport } from '../../models/suppliers-list-report.interface';

export function adaptSuppliersListReportToUI(source?: ApiSuppliersListReportDto | null): SuppliersListReport {
  return {
    inProgress: source?.InProgress ?? false,
    reportGuid: source?.ReportGuid ?? '',
  };
}
