import { ApiBlockFinanceDto } from '../../../swagger/models/api-block-finance-dto';
import { BlockFinance } from '../../models/block-finance.interface';
import { paymentMethodEnumAdapter } from '../enums/payment-method-enum.adapter';

export const blockFinanceAdapter = (source?: ApiBlockFinanceDto | null): BlockFinance => {
  return {
    accountNumber: source?.AccountNumber,
    applicationId: source?.ApplicationId,
    emailForReceipt: source?.EmailForReceipt,
    paymentMethod: source?.PaymentMethod === null ? undefined : paymentMethodEnumAdapter(source?.PaymentMethod),
  };
}
