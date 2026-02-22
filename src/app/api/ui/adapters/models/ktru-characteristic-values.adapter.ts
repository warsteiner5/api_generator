import { ApiKtruCharacteristicValuesDto } from '../../../swagger/models/api-ktru-characteristic-values-dto';
import { KtruCharacteristicValues } from '../../models/ktru-characteristic-values.interface';

export const ktruCharacteristicValuesAdapter = (source?: ApiKtruCharacteristicValuesDto | null): KtruCharacteristicValues => {
  return {
    id: source?.Id,
    valueIds: source?.ValueIds,
  };
}
