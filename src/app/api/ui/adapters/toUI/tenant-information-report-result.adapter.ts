import { ApiTenantInformationReportResultDto } from '../../../swagger/models/api-tenant-information-report-result-dto';
import { TenantInformationReportResult } from '../../models/tenant-information-report-result.interface';

export function adaptTenantInformationReportResultToUI(source?: ApiTenantInformationReportResultDto | null): TenantInformationReportResult {
  return {
    countTrade: source?.CountTrade ?? 0,
    lotPrice: source?.LotPrice ?? '',
    numberPosition: source?.NumberPosition ?? 0,
    okpD2Group: source?.OKPD2Group ?? '',
    okpD2GroupCode: source?.OKPD2GroupCode ?? '',
    tenantGroup: source?.TenantGroup ?? '',
  };
}
