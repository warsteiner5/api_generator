import { ReportFormatTypeEnum } from '../../enums/report-format-type.enum';
import { ApiReportFormatTypeEnum } from '../../../swagger/models/api-report-format-type-enum';

export const apiReportFormatTypeEnumAdapter = (source?: ReportFormatTypeEnum | null): ApiReportFormatTypeEnum => {
  switch (source) {
    case ReportFormatTypeEnum.Pdf:
      return ApiReportFormatTypeEnum.Pdf;
    case ReportFormatTypeEnum.Xlsx:
      return ApiReportFormatTypeEnum.Xlsx;
    case ReportFormatTypeEnum.Html:
      return ApiReportFormatTypeEnum.Html;
    default:
      throw new Error(`Enum value is not defined: ReportFormatTypeEnum=${String(source)}`);
  }
}
