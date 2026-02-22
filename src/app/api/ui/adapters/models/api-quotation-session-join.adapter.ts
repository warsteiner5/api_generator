import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { ApiQuotationSessionJoinAltDto } from '../../../swagger/models/api-quotation-session-join';
import { apiPaymentMethodEnumAdapter } from '../enums/api-payment-method-enum.adapter';

export const apiQuotationSessionJoinAltDtoAdapter = (source?: QuotationSessionJoinAlt | null): ApiQuotationSessionJoinAltDto => {
  return {
    AgreementDetachedSignature: source?.agreementDetachedSignature,
    AgreementFileGuid: source?.agreementFileGuid,
    EmailForReceipt: source?.emailForReceipt,
    LotId: source?.lotId,
    PaymentMethod: source?.paymentMethod === null ? undefined : apiPaymentMethodEnumAdapter(source?.paymentMethod),
  };
}
