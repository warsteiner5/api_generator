import { SuppliersListReportResult } from '../../models/suppliers-list-report-result.interface';
import { ApiSuppliersListReportResultDto } from '../../../swagger/models/api-suppliers-list-report-result-dto';

export function adaptApiSuppliersListReportResultDto(source?: SuppliersListReportResult | null): ApiSuppliersListReportResultDto {
  return {
    InProgress: source?.inProgress,
    ReportUrl: source?.reportUrl,
  };
}
