import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { ApiQuotationSessionJoinAltDto } from '../../../swagger/models/api-quotation-session-join';
import { adaptApiPaymentMethodEnum } from './api-payment-method-enum.adapter';

export function adaptApiQuotationSessionJoinAltDto(source?: QuotationSessionJoinAlt | null): ApiQuotationSessionJoinAltDto {
  return {
    AgreementDetachedSignature: source?.agreementDetachedSignature,
    AgreementFileGuid: source?.agreementFileGuid,
    EmailForReceipt: source?.emailForReceipt,
    LotId: source?.lotId,
    PaymentMethod: adaptApiPaymentMethodEnum(source?.paymentMethod),
  };
}
