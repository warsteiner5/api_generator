import { ApiKtruCharacteristicValuesDto } from '../../../swagger/models/api-ktru-characteristic-values-dto';
import { KtruCharacteristicValues } from '../../models/ktru-characteristic-values.interface';

export function adaptKtruCharacteristicValuesToUI(source?: ApiKtruCharacteristicValuesDto | null): KtruCharacteristicValues {
  return {
    id: source?.Id ?? 0,
    valueIds: source?.ValueIds ?? [],
  };
}
