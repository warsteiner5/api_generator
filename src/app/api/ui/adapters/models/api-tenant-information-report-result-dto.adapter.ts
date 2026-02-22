import { TenantInformationReportResult } from '../../models/tenant-information-report-result.interface';
import { ApiTenantInformationReportResultDto } from '../../../swagger/models/api-tenant-information-report-result-dto';

export const apiTenantInformationReportResultDtoAdapter = (source?: TenantInformationReportResult | null): ApiTenantInformationReportResultDto => {
  return {
    CountTrade: source?.countTrade,
    LotPrice: source?.lotPrice,
    NumberPosition: source?.numberPosition,
    OKPD2Group: source?.okpD2Group,
    OKPD2GroupCode: source?.okpD2GroupCode,
    TenantGroup: source?.tenantGroup,
  };
}
