import { ConditionsOfPaymentEnum } from '../../enums/conditions-of-payment.enum';
import { ApiConditionsOfPaymentEnum } from '../../../swagger/models/api-conditions-of-payment-enum';

export const apiConditionsOfPaymentEnumAdapter = (source?: ConditionsOfPaymentEnum | null): ApiConditionsOfPaymentEnum => {
  switch (source) {
    case ConditionsOfPaymentEnum.Prepayment:
      return ApiConditionsOfPaymentEnum.Prepayment;
    case ConditionsOfPaymentEnum.Postpay:
      return ApiConditionsOfPaymentEnum.Postpay;
    case ConditionsOfPaymentEnum.InstallmentPay:
      return ApiConditionsOfPaymentEnum.InstallmentPay;
    case ConditionsOfPaymentEnum.CreditPay:
      return ApiConditionsOfPaymentEnum.CreditPay;
    case ConditionsOfPaymentEnum.ByDocumentation:
      return ApiConditionsOfPaymentEnum.ByDocumentation;
    default:
      throw new Error(`Enum value is not defined: ConditionsOfPaymentEnum=${String(source)}`);
  }
}
