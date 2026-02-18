import { KtruCharacteristicValues } from '../../models/ktru-characteristic-values.interface';
import { ApiKtruCharacteristicValuesDto } from '../../../swagger/models/api-ktru-characteristic-values-dto';

export function adaptApiKtruCharacteristicValuesDto(source?: KtruCharacteristicValues | null): ApiKtruCharacteristicValuesDto {
  return {
    Id: source?.id,
    ValueIds: source?.valueIds ?? [],
  };
}
