import { ReportsCanGenerateNew$Params } from '../../../swagger/fn/reports/reports-can-generate-new';
import { ReportTypeEnum } from '../../enums/report-type.enum';
import { adaptApiReportTypeEnum } from '../../adapters/toDto/api-report-type-enum.adapter';

export interface ReportsCanGenerateNewParams {
  reportType: ReportTypeEnum;
}

export const reportsCanGenerateNewParamsAdapter = {
  adapt(params?: ReportsCanGenerateNewParams): ReportsCanGenerateNew$Params {
    if (!params) {
      return {} as ReportsCanGenerateNew$Params;
    }
    return {
      reportType: adaptApiReportTypeEnum(params.reportType),
    };
  }
};
