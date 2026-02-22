import { ApiReportSupplierParametersAltDto } from '../../../swagger/models/api-report-supplier-parameters';
import { ReportSupplierParametersAlt } from '../../models/report-supplier-parameters-alt.interface';

export const reportSupplierParametersAltAdapter = (source?: ApiReportSupplierParametersAltDto | null): ReportSupplierParametersAlt => {
  return {
    supplierId: source?.SupplierId,
  };
}
