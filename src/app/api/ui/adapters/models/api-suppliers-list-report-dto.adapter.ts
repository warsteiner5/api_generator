import { SuppliersListReport } from '../../models/suppliers-list-report.interface';
import { ApiSuppliersListReportDto } from '../../../swagger/models/api-suppliers-list-report-dto';

export const apiSuppliersListReportDtoAdapter = (source?: SuppliersListReport | null): ApiSuppliersListReportDto => {
  return {
    InProgress: source?.inProgress,
    ReportGuid: source?.reportGuid,
  };
}
