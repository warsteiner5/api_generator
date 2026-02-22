import { ApiQuotationSessionJoinAltDto } from '../../../swagger/models/api-quotation-session-join';
import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { paymentMethodEnumAdapter } from '../enums/payment-method-enum.adapter';

export const quotationSessionJoinAltAdapter = (source?: ApiQuotationSessionJoinAltDto | null): QuotationSessionJoinAlt => {
  return {
    agreementDetachedSignature: source?.AgreementDetachedSignature,
    agreementFileGuid: source?.AgreementFileGuid,
    emailForReceipt: source?.EmailForReceipt,
    lotId: source?.LotId,
    paymentMethod: source?.PaymentMethod === null ? undefined : paymentMethodEnumAdapter(source?.PaymentMethod),
  };
}
