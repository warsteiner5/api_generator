import { ReportGenerateSupplierReport$Params } from '../../../swagger/fn/report/report-generate-supplier-report';
import { ReportSupplierParametersAlt } from '../../models/report-supplier-parameters-alt.interface';
import { apiReportSupplierParametersAltDtoAdapter } from '../../adapters/models/api-report-supplier-parameters.adapter';

// @ts-ignore
export interface ReportGenerateSupplierReportParams {
  body?: ReportSupplierParametersAlt;
}

export function reportGenerateSupplierReportAdapter(params?: ReportGenerateSupplierReportParams): ReportGenerateSupplierReport$Params {
  if (!params) {
    return {} as ReportGenerateSupplierReport$Params;
  }
  return {
      body: apiReportSupplierParametersAltDtoAdapter(params.body),
  };
}
