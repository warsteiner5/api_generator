import { ApiQuotationSessionJoinNewAltDto } from '../../../swagger/models/api-quotation-session-join-new';
import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { adaptPaymentMethodEnumToUI } from './payment-method-enum.adapter';

export function adaptQuotationSessionJoinNewAltToUI(source?: ApiQuotationSessionJoinNewAltDto | null): QuotationSessionJoinNewAlt {
  return {
    agreementDetachedSignature: source?.AgreementDetachedSignature ?? '',
    agreementFileId: source?.AgreementFileId ?? '',
    emailForReceipt: source?.EmailForReceipt ?? '',
    paymentMethod: adaptPaymentMethodEnumToUI(source?.PaymentMethod),
    tradeGuid: source?.TradeGuid ?? '',
  };
}
