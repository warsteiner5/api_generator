import { OkServiceBriefReport } from '../../models/ok-service-brief-report.interface';
import { ApiOkServiceBriefReportDto } from '../../../swagger/models/api-ok-service-brief-report-dto';

export const apiOkServiceBriefReportDtoAdapter = (source?: OkServiceBriefReport | null): ApiOkServiceBriefReportDto => {
  return {
    Color: source?.color,
    Inn: source?.inn,
    OrganizationGuid: source?.organizationGuid,
    Reasons: source?.reasons,
  };
}
