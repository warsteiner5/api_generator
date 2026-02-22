import { ApiTenantInformationReportResultDto } from '../../../swagger/models/api-tenant-information-report-result-dto';
import { TenantInformationReportResult } from '../../models/tenant-information-report-result.interface';

export const tenantInformationReportResultAdapter = (source?: ApiTenantInformationReportResultDto | null): TenantInformationReportResult => {
  return {
    countTrade: source?.CountTrade,
    lotPrice: source?.LotPrice,
    numberPosition: source?.NumberPosition,
    okpD2Group: source?.OKPD2Group,
    okpD2GroupCode: source?.OKPD2GroupCode,
    tenantGroup: source?.TenantGroup,
  };
}
