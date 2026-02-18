import { ApiPaymentMethodEnum } from '../../../swagger/models/api-payment-method-enum';
import { PaymentMethodEnum } from '../../enums/payment-method.enum';

export function adaptPaymentMethodEnumToUI(source?: ApiPaymentMethodEnum | null): PaymentMethodEnum {
  switch (source) {
    case ApiPaymentMethodEnum.Unknown:
      return PaymentMethodEnum.Unknown;
    case ApiPaymentMethodEnum.Card:
      return PaymentMethodEnum.Card;
    case ApiPaymentMethodEnum.Account:
      return PaymentMethodEnum.Account;
    default:
      throw new Error(`Enum value is not defined: ApiPaymentMethodEnum=${String(source)}`);
  }
}
