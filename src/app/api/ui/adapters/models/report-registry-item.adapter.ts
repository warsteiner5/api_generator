import { ApiReportRegistryItemDto } from '../../../swagger/models/api-report-registry-item-dto';
import { ReportRegistryItem } from '../../models/report-registry-item.interface';
import { reportFormatTypeEnumAdapter } from '../enums/report-format-type-enum.adapter';
import { reportTypeEnumAdapter } from '../enums/report-type-enum.adapter';
import { sagaStatusEnumAdapter } from '../enums/saga-status-enum.adapter';

export const reportRegistryItemAdapter = (source?: ApiReportRegistryItemDto | null): ReportRegistryItem => {
  return {
    formatType: source?.FormatType === null ? undefined : reportFormatTypeEnumAdapter(source?.FormatType),
    guid: source?.Guid,
    reportDate: source?.ReportDate,
    reportStatus: source?.ReportStatus === null ? undefined : sagaStatusEnumAdapter(source?.ReportStatus),
    size: source?.Size,
    type: source?.Type === null ? undefined : reportTypeEnumAdapter(source?.Type),
  };
}
