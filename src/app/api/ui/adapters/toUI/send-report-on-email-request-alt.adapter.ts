import { ApiSendReportOnEmailRequestAltDto } from '../../../swagger/models/api-send-report-on-email-request';
import { SendReportOnEmailRequestAlt } from '../../models/send-report-on-email-request-alt.interface';

export function adaptSendReportOnEmailRequestAltToUI(source?: ApiSendReportOnEmailRequestAltDto | null): SendReportOnEmailRequestAlt {
  return {
    customerEmail: source?.CustomerEmail ?? '',
    customerInn: source?.CustomerInn ?? '',
    supplierInn: source?.SupplierInn ?? '',
  };
}
