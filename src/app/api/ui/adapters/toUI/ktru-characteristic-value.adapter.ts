import { ApiKtruCharacteristicValueDto } from '../../../swagger/models/api-ktru-characteristic-value-dto';
import { KtruCharacteristicValue } from '../../models/ktru-characteristic-value.interface';

export function adaptKtruCharacteristicValueToUI(source?: ApiKtruCharacteristicValueDto | null): KtruCharacteristicValue {
  return {
    concreteValue: source?.ConcreteValue ?? 0,
    formatId: source?.FormatId ?? 0,
    id: source?.Id ?? 0,
    maxMathNotation: source?.MaxMathNotation ?? '',
    maxValue: source?.MaxValue ?? 0,
    minMathNotation: source?.MinMathNotation ?? '',
    minValue: source?.MinValue ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    qualityDescription: source?.QualityDescription ?? '',
  };
}
