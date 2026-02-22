import { ApiQuotationSessionJoinNewAltDto } from '../../../swagger/models/api-quotation-session-join-new';
import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { paymentMethodEnumAdapter } from '../enums/payment-method-enum.adapter';

export const quotationSessionJoinNewAltAdapter = (source?: ApiQuotationSessionJoinNewAltDto | null): QuotationSessionJoinNewAlt => {
  return {
    agreementDetachedSignature: source?.AgreementDetachedSignature,
    agreementFileId: source?.AgreementFileId,
    emailForReceipt: source?.EmailForReceipt,
    paymentMethod: source?.PaymentMethod === null ? undefined : paymentMethodEnumAdapter(source?.PaymentMethod),
    tradeGuid: source?.TradeGuid,
  };
}
