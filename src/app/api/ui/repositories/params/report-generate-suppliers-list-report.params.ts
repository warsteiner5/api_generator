import { ReportGenerateSuppliersListReport$Params } from '../../../swagger/fn/report/report-generate-suppliers-list-report';
import { ReportSuppliersListParametersAlt } from '../../models/report-suppliers-list-parameters-alt.interface';
import { adaptApiReportSuppliersListParametersAltDto } from '../../adapters/toDto/api-report-suppliers-list-parameters.adapter';

export interface ReportGenerateSuppliersListReportParams {
  body?: ReportSuppliersListParametersAlt;
}

export const reportGenerateSuppliersListReportParamsAdapter = {
  adapt(params?: ReportGenerateSuppliersListReportParams): ReportGenerateSuppliersListReport$Params {
    if (!params) {
      return {} as ReportGenerateSuppliersListReport$Params;
    }
    return {
      body: adaptApiReportSuppliersListParametersAltDto(params.body),
    };
  }
};
