import { ReportGenerateSupplierReport$Params } from '../../../swagger/fn/report/report-generate-supplier-report';
import { ReportSupplierParametersAlt } from '../../models/report-supplier-parameters-alt.interface';
import { adaptApiReportSupplierParametersAltDto } from '../../adapters/toDto/api-report-supplier-parameters.adapter';

export interface ReportGenerateSupplierReportParams {
  body?: ReportSupplierParametersAlt;
}

export const reportGenerateSupplierReportParamsAdapter = {
  adapt(params?: ReportGenerateSupplierReportParams): ReportGenerateSupplierReport$Params {
    if (!params) {
      return {} as ReportGenerateSupplierReport$Params;
    }
    return {
      body: adaptApiReportSupplierParametersAltDto(params.body),
    };
  }
};
