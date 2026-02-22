import { ApiOkServiceBriefReportDto } from '../../../swagger/models/api-ok-service-brief-report-dto';
import { OkServiceBriefReport } from '../../models/ok-service-brief-report.interface';

export const okServiceBriefReportAdapter = (source?: ApiOkServiceBriefReportDto | null): OkServiceBriefReport => {
  return {
    color: source?.Color,
    inn: source?.Inn,
    organizationGuid: source?.OrganizationGuid,
    reasons: source?.Reasons,
  };
}
