import { ReportSupplierParametersAlt } from '../../models/report-supplier-parameters-alt.interface';
import { ApiReportSupplierParametersAltDto } from '../../../swagger/models/api-report-supplier-parameters';

export const apiReportSupplierParametersAltDtoAdapter = (source?: ReportSupplierParametersAlt | null): ApiReportSupplierParametersAltDto => {
  return {
    SupplierId: source?.supplierId,
  };
}
