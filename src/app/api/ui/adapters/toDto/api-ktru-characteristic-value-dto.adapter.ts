import { KtruCharacteristicValue } from '../../models/ktru-characteristic-value.interface';
import { ApiKtruCharacteristicValueDto } from '../../../swagger/models/api-ktru-characteristic-value-dto';

export function adaptApiKtruCharacteristicValueDto(source?: KtruCharacteristicValue | null): ApiKtruCharacteristicValueDto {
  return {
    ConcreteValue: source?.concreteValue,
    FormatId: source?.formatId,
    Id: source?.id,
    MaxMathNotation: source?.maxMathNotation,
    MaxValue: source?.maxValue,
    MinMathNotation: source?.minMathNotation,
    MinValue: source?.minValue,
    OkeiCode: source?.okeiCode,
    QualityDescription: source?.qualityDescription,
  };
}
