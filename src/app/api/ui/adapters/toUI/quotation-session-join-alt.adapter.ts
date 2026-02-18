import { ApiQuotationSessionJoinAltDto } from '../../../swagger/models/api-quotation-session-join';
import { QuotationSessionJoinAlt } from '../../models/quotation-session-join-alt.interface';
import { adaptPaymentMethodEnumToUI } from './payment-method-enum.adapter';

export function adaptQuotationSessionJoinAltToUI(source?: ApiQuotationSessionJoinAltDto | null): QuotationSessionJoinAlt {
  return {
    agreementDetachedSignature: source?.AgreementDetachedSignature ?? '',
    agreementFileGuid: source?.AgreementFileGuid ?? '',
    emailForReceipt: source?.EmailForReceipt ?? '',
    lotId: source?.LotId ?? 0,
    paymentMethod: adaptPaymentMethodEnumToUI(source?.PaymentMethod),
  };
}
