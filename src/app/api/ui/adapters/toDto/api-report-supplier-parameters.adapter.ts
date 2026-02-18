import { ReportSupplierParametersAlt } from '../../models/report-supplier-parameters-alt.interface';
import { ApiReportSupplierParametersAltDto } from '../../../swagger/models/api-report-supplier-parameters';

export function adaptApiReportSupplierParametersAltDto(source?: ReportSupplierParametersAlt | null): ApiReportSupplierParametersAltDto {
  return {
    SupplierId: source?.supplierId,
  };
}
