import { ApiBlockFinanceDto } from '../../../swagger/models/api-block-finance-dto';
import { BlockFinance } from '../../models/block-finance.interface';
import { adaptPaymentMethodEnumToUI } from './payment-method-enum.adapter';

export function adaptBlockFinanceToUI(source?: ApiBlockFinanceDto | null): BlockFinance {
  return {
    accountNumber: source?.AccountNumber ?? '',
    applicationId: source?.ApplicationId ?? 0,
    emailForReceipt: source?.EmailForReceipt ?? '',
    paymentMethod: adaptPaymentMethodEnumToUI(source?.PaymentMethod),
  };
}
