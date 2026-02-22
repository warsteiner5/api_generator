import { LotItemCharacteristicValue } from '../../models/lot-item-characteristic-value.interface';
import { ApiLotItemCharacteristicValueDto } from '../../../swagger/models/api-lot-item-characteristic-value-dto';
import { apiKtruCharacteristicValueFormatEnumAdapter } from '../enums/api-ktru-characteristic-value-format-enum.adapter';

export const apiLotItemCharacteristicValueDtoAdapter = (source?: LotItemCharacteristicValue | null): ApiLotItemCharacteristicValueDto => {
  return {
    ConcreteValue: source?.concreteValue,
    ExternalSId: source?.externalSId,
    IsOutRange: source?.isOutRange,
    KtruCharacteristicValueFormatType: source?.ktruCharacteristicValueFormatType === null ? undefined : apiKtruCharacteristicValueFormatEnumAdapter(source?.ktruCharacteristicValueFormatType),
    MaxMathNotation: source?.maxMathNotation,
    MaxValue: source?.maxValue,
    MinMathNotation: source?.minMathNotation,
    MinValue: source?.minValue,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    QualityDescription: source?.qualityDescription,
    SId: source?.sId,
  };
}
