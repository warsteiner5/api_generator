import { ReportGenerateSuppliersListReport$Params } from '../../../swagger/fn/report/report-generate-suppliers-list-report';
import { ReportSuppliersListParametersAlt } from '../../models/report-suppliers-list-parameters-alt.interface';
import { apiReportSuppliersListParametersAltDtoAdapter } from '../../adapters/models/api-report-suppliers-list-parameters.adapter';

// @ts-ignore
export interface ReportGenerateSuppliersListReportParams {
  body?: ReportSuppliersListParametersAlt;
}

export function reportGenerateSuppliersListReportAdapter(params?: ReportGenerateSuppliersListReportParams): ReportGenerateSuppliersListReport$Params {
  if (!params) {
    return {} as ReportGenerateSuppliersListReport$Params;
  }
  return {
      body: apiReportSuppliersListParametersAltDtoAdapter(params.body),
  };
}
