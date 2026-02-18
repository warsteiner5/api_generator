import { ReportRegistryItem } from '../../models/report-registry-item.interface';
import { ApiReportRegistryItemDto } from '../../../swagger/models/api-report-registry-item-dto';
import { adaptApiReportFormatTypeEnum } from './api-report-format-type-enum.adapter';
import { adaptApiReportTypeEnum } from './api-report-type-enum.adapter';
import { adaptApiSagaStatusEnum } from './api-saga-status-enum.adapter';

export function adaptApiReportRegistryItemDto(source?: ReportRegistryItem | null): ApiReportRegistryItemDto {
  return {
    FormatType: adaptApiReportFormatTypeEnum(source?.formatType),
    Guid: source?.guid,
    ReportDate: source?.reportDate,
    ReportStatus: adaptApiSagaStatusEnum(source?.reportStatus),
    Size: source?.size,
    Type: adaptApiReportTypeEnum(source?.type),
  };
}
