import { BlockFinance } from '../../models/block-finance.interface';
import { ApiBlockFinanceDto } from '../../../swagger/models/api-block-finance-dto';
import { apiPaymentMethodEnumAdapter } from '../enums/api-payment-method-enum.adapter';

export const apiBlockFinanceDtoAdapter = (source?: BlockFinance | null): ApiBlockFinanceDto => {
  return {
    AccountNumber: source?.accountNumber,
    ApplicationId: source?.applicationId,
    EmailForReceipt: source?.emailForReceipt,
    PaymentMethod: source?.paymentMethod === null ? undefined : apiPaymentMethodEnumAdapter(source?.paymentMethod),
  };
}
