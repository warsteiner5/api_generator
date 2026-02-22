import { ApiCreateAccreditationPaymentPrintFormRequestAltDto } from '../../../swagger/models/api-create-accreditation-payment-print-form-request';
import { CreateAccreditationPaymentPrintFormRequestAlt } from '../../models/create-accreditation-payment-print-form-request-alt.interface';

export const createAccreditationPaymentPrintFormRequestAltAdapter = (source?: ApiCreateAccreditationPaymentPrintFormRequestAltDto | null): CreateAccreditationPaymentPrintFormRequestAlt => {
  return {
    accountNumber: source?.AccountNumber,
    paySum: source?.PaySum,
  };
}
