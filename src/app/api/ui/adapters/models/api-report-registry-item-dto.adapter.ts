import { ReportRegistryItem } from '../../models/report-registry-item.interface';
import { ApiReportRegistryItemDto } from '../../../swagger/models/api-report-registry-item-dto';
import { apiReportFormatTypeEnumAdapter } from '../enums/api-report-format-type-enum.adapter';
import { apiReportTypeEnumAdapter } from '../enums/api-report-type-enum.adapter';
import { apiSagaStatusEnumAdapter } from '../enums/api-saga-status-enum.adapter';

export const apiReportRegistryItemDtoAdapter = (source?: ReportRegistryItem | null): ApiReportRegistryItemDto => {
  return {
    FormatType: source?.formatType === null ? undefined : apiReportFormatTypeEnumAdapter(source?.formatType),
    Guid: source?.guid,
    ReportDate: source?.reportDate,
    ReportStatus: source?.reportStatus === null ? undefined : apiSagaStatusEnumAdapter(source?.reportStatus),
    Size: source?.size,
    Type: source?.type === null ? undefined : apiReportTypeEnumAdapter(source?.type),
  };
}
