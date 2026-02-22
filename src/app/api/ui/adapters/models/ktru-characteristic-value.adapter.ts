import { ApiKtruCharacteristicValueDto } from '../../../swagger/models/api-ktru-characteristic-value-dto';
import { KtruCharacteristicValue } from '../../models/ktru-characteristic-value.interface';

export const ktruCharacteristicValueAdapter = (source?: ApiKtruCharacteristicValueDto | null): KtruCharacteristicValue => {
  return {
    concreteValue: source?.ConcreteValue,
    formatId: source?.FormatId,
    id: source?.Id,
    maxMathNotation: source?.MaxMathNotation,
    maxValue: source?.MaxValue,
    minMathNotation: source?.MinMathNotation,
    minValue: source?.MinValue,
    okeiCode: source?.OkeiCode,
    qualityDescription: source?.QualityDescription,
  };
}
