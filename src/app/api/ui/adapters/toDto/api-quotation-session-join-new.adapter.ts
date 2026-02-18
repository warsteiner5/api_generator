import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { ApiQuotationSessionJoinNewAltDto } from '../../../swagger/models/api-quotation-session-join-new';
import { adaptApiPaymentMethodEnum } from './api-payment-method-enum.adapter';

export function adaptApiQuotationSessionJoinNewAltDto(source?: QuotationSessionJoinNewAlt | null): ApiQuotationSessionJoinNewAltDto {
  return {
    AgreementDetachedSignature: source?.agreementDetachedSignature,
    AgreementFileId: source?.agreementFileId,
    EmailForReceipt: source?.emailForReceipt,
    PaymentMethod: adaptApiPaymentMethodEnum(source?.paymentMethod),
    TradeGuid: source?.tradeGuid,
  };
}
