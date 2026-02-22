import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { ApiQuotationSessionJoinNewAltDto } from '../../../swagger/models/api-quotation-session-join-new';
import { apiPaymentMethodEnumAdapter } from '../enums/api-payment-method-enum.adapter';

export const apiQuotationSessionJoinNewAltDtoAdapter = (source?: QuotationSessionJoinNewAlt | null): ApiQuotationSessionJoinNewAltDto => {
  return {
    AgreementDetachedSignature: source?.agreementDetachedSignature,
    AgreementFileId: source?.agreementFileId,
    EmailForReceipt: source?.emailForReceipt,
    PaymentMethod: source?.paymentMethod === null ? undefined : apiPaymentMethodEnumAdapter(source?.paymentMethod),
    TradeGuid: source?.tradeGuid,
  };
}
