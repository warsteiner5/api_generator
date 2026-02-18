import { VatRateStateEnum } from '../../enums/vat-rate-state.enum';
import { ApiVatRateStateEnum } from '../../../swagger/models/api-vat-rate-state-enum';

export function adaptApiVatRateStateEnum(source?: VatRateStateEnum | null): ApiVatRateStateEnum {
  switch (source) {
    case VatRateStateEnum.VatRateNotDefined:
      return ApiVatRateStateEnum.VatRateNotDefined;
    case VatRateStateEnum.VatRateSubject:
      return ApiVatRateStateEnum.VatRateSubject;
    case VatRateStateEnum.VatRateNotSubject:
      return ApiVatRateStateEnum.VatRateNotSubject;
    case VatRateStateEnum.ExcludingVatRate:
      return ApiVatRateStateEnum.ExcludingVatRate;
    default:
      throw new Error(`Enum value is not defined: VatRateStateEnum=${String(source)}`);
  }
}
