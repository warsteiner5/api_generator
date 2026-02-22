import { ApiLotItemCharacteristicValueDto } from '../../../swagger/models/api-lot-item-characteristic-value-dto';
import { LotItemCharacteristicValue } from '../../models/lot-item-characteristic-value.interface';
import { ktruCharacteristicValueFormatEnumAdapter } from '../enums/ktru-characteristic-value-format-enum.adapter';

export const lotItemCharacteristicValueAdapter = (source?: ApiLotItemCharacteristicValueDto | null): LotItemCharacteristicValue => {
  return {
    concreteValue: source?.ConcreteValue,
    externalSId: source?.ExternalSId,
    isOutRange: source?.IsOutRange,
    ktruCharacteristicValueFormatType: source?.KtruCharacteristicValueFormatType === null ? undefined : ktruCharacteristicValueFormatEnumAdapter(source?.KtruCharacteristicValueFormatType),
    maxMathNotation: source?.MaxMathNotation,
    maxValue: source?.MaxValue,
    minMathNotation: source?.MinMathNotation,
    minValue: source?.MinValue,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    qualityDescription: source?.QualityDescription,
    sId: source?.SId,
  };
}
