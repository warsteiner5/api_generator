import { ReportsCanGenerateNew$Params } from '../../../swagger/fn/reports/reports-can-generate-new';
import { ReportTypeEnum } from '../../enums/report-type.enum';
import { apiReportTypeEnumAdapter } from '../../adapters/enums/api-report-type-enum.adapter';

// @ts-ignore
export interface ReportsCanGenerateNewParams {
  reportType: ReportTypeEnum;
}

export function reportsCanGenerateNewAdapter(params?: ReportsCanGenerateNewParams): ReportsCanGenerateNew$Params {
  if (!params) {
    return {} as ReportsCanGenerateNew$Params;
  }
  return {
      reportType: apiReportTypeEnumAdapter(params.reportType),
  };
}
