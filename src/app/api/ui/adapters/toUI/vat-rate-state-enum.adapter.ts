import { ApiVatRateStateEnum } from '../../../swagger/models/api-vat-rate-state-enum';
import { VatRateStateEnum } from '../../enums/vat-rate-state.enum';

export function adaptVatRateStateEnumToUI(source?: ApiVatRateStateEnum | null): VatRateStateEnum {
  switch (source) {
    case ApiVatRateStateEnum.VatRateNotDefined:
      return VatRateStateEnum.VatRateNotDefined;
    case ApiVatRateStateEnum.VatRateSubject:
      return VatRateStateEnum.VatRateSubject;
    case ApiVatRateStateEnum.VatRateNotSubject:
      return VatRateStateEnum.VatRateNotSubject;
    case ApiVatRateStateEnum.ExcludingVatRate:
      return VatRateStateEnum.ExcludingVatRate;
    default:
      throw new Error(`Enum value is not defined: ApiVatRateStateEnum=${String(source)}`);
  }
}
