import { BlockFinance } from '../../models/block-finance.interface';
import { ApiBlockFinanceDto } from '../../../swagger/models/api-block-finance-dto';
import { adaptApiPaymentMethodEnum } from './api-payment-method-enum.adapter';

export function adaptApiBlockFinanceDto(source?: BlockFinance | null): ApiBlockFinanceDto {
  return {
    AccountNumber: source?.accountNumber,
    ApplicationId: source?.applicationId,
    EmailForReceipt: source?.emailForReceipt,
    PaymentMethod: adaptApiPaymentMethodEnum(source?.paymentMethod),
  };
}
