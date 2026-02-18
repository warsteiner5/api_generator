import { ApiReportRegistryItemDto } from '../../../swagger/models/api-report-registry-item-dto';
import { ReportRegistryItem } from '../../models/report-registry-item.interface';
import { adaptReportFormatTypeEnumToUI } from './report-format-type-enum.adapter';
import { adaptReportTypeEnumToUI } from './report-type-enum.adapter';
import { adaptSagaStatusEnumToUI } from './saga-status-enum.adapter';

export function adaptReportRegistryItemToUI(source?: ApiReportRegistryItemDto | null): ReportRegistryItem {
  return {
    formatType: adaptReportFormatTypeEnumToUI(source?.FormatType),
    guid: source?.Guid ?? '',
    reportDate: source?.ReportDate ?? '',
    reportStatus: adaptSagaStatusEnumToUI(source?.ReportStatus),
    size: source?.Size ?? 0,
    type: adaptReportTypeEnumToUI(source?.Type),
  };
}
