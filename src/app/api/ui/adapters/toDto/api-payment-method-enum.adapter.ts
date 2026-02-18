import { PaymentMethodEnum } from '../../enums/payment-method.enum';
import { ApiPaymentMethodEnum } from '../../../swagger/models/api-payment-method-enum';

export function adaptApiPaymentMethodEnum(source?: PaymentMethodEnum | null): ApiPaymentMethodEnum {
  switch (source) {
    case PaymentMethodEnum.Unknown:
      return ApiPaymentMethodEnum.Unknown;
    case PaymentMethodEnum.Card:
      return ApiPaymentMethodEnum.Card;
    case PaymentMethodEnum.Account:
      return ApiPaymentMethodEnum.Account;
    default:
      throw new Error(`Enum value is not defined: PaymentMethodEnum=${String(source)}`);
  }
}
