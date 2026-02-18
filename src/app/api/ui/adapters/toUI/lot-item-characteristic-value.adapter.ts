import { ApiLotItemCharacteristicValueDto } from '../../../swagger/models/api-lot-item-characteristic-value-dto';
import { LotItemCharacteristicValue } from '../../models/lot-item-characteristic-value.interface';
import { adaptKtruCharacteristicValueFormatEnumToUI } from './ktru-characteristic-value-format-enum.adapter';

export function adaptLotItemCharacteristicValueToUI(source?: ApiLotItemCharacteristicValueDto | null): LotItemCharacteristicValue {
  return {
    concreteValue: source?.ConcreteValue ?? 0,
    externalSId: source?.ExternalSId ?? '',
    isOutRange: source?.IsOutRange ?? false,
    ktruCharacteristicValueFormatType: adaptKtruCharacteristicValueFormatEnumToUI(source?.KtruCharacteristicValueFormatType),
    maxMathNotation: source?.MaxMathNotation ?? '',
    maxValue: source?.MaxValue ?? 0,
    minMathNotation: source?.MinMathNotation ?? '',
    minValue: source?.MinValue ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    qualityDescription: source?.QualityDescription ?? '',
    sId: source?.SId ?? 0,
  };
}
