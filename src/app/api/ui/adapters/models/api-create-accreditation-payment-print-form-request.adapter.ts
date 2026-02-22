import { CreateAccreditationPaymentPrintFormRequestAlt } from '../../models/create-accreditation-payment-print-form-request-alt.interface';
import { ApiCreateAccreditationPaymentPrintFormRequestAltDto } from '../../../swagger/models/api-create-accreditation-payment-print-form-request';

export const apiCreateAccreditationPaymentPrintFormRequestAltDtoAdapter = (source?: CreateAccreditationPaymentPrintFormRequestAlt | null): ApiCreateAccreditationPaymentPrintFormRequestAltDto => {
  return {
    AccountNumber: source?.accountNumber,
    PaySum: source?.paySum,
  };
}
