import { SendReportOnEmailRequestAlt } from '../../models/send-report-on-email-request-alt.interface';
import { ApiSendReportOnEmailRequestAltDto } from '../../../swagger/models/api-send-report-on-email-request';

export function adaptApiSendReportOnEmailRequestAltDto(source?: SendReportOnEmailRequestAlt | null): ApiSendReportOnEmailRequestAltDto {
  return {
    CustomerEmail: source?.customerEmail,
    CustomerInn: source?.customerInn,
    SupplierInn: source?.supplierInn,
  };
}
