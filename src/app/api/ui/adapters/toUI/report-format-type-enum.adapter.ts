import { ApiReportFormatTypeEnum } from '../../../swagger/models/api-report-format-type-enum';
import { ReportFormatTypeEnum } from '../../enums/report-format-type.enum';

export function adaptReportFormatTypeEnumToUI(source?: ApiReportFormatTypeEnum | null): ReportFormatTypeEnum {
  switch (source) {
    case ApiReportFormatTypeEnum.Pdf:
      return ReportFormatTypeEnum.Pdf;
    case ApiReportFormatTypeEnum.Xlsx:
      return ReportFormatTypeEnum.Xlsx;
    case ApiReportFormatTypeEnum.Html:
      return ReportFormatTypeEnum.Html;
    default:
      throw new Error(`Enum value is not defined: ApiReportFormatTypeEnum=${String(source)}`);
  }
}
