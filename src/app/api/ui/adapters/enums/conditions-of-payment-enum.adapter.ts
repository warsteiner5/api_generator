import { ApiConditionsOfPaymentEnum } from '../../../swagger/models/api-conditions-of-payment-enum';
import { ConditionsOfPaymentEnum } from '../../enums/conditions-of-payment.enum';

export const conditionsOfPaymentEnumAdapter = (source?: ApiConditionsOfPaymentEnum | null): ConditionsOfPaymentEnum => {
  switch (source) {
    case ApiConditionsOfPaymentEnum.Prepayment:
      return ConditionsOfPaymentEnum.Prepayment;
    case ApiConditionsOfPaymentEnum.Postpay:
      return ConditionsOfPaymentEnum.Postpay;
    case ApiConditionsOfPaymentEnum.InstallmentPay:
      return ConditionsOfPaymentEnum.InstallmentPay;
    case ApiConditionsOfPaymentEnum.CreditPay:
      return ConditionsOfPaymentEnum.CreditPay;
    case ApiConditionsOfPaymentEnum.ByDocumentation:
      return ConditionsOfPaymentEnum.ByDocumentation;
    default:
      throw new Error(`Enum value is not defined: ApiConditionsOfPaymentEnum=${String(source)}`);
  }
}
