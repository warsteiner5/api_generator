import { KtruCharacteristic } from '../../models/ktru-characteristic.interface';
import { ApiKtruCharacteristicDto } from '../../../swagger/models/api-ktru-characteristic-dto';

export function adaptApiKtruCharacteristicDto(source?: KtruCharacteristic | null): ApiKtruCharacteristicDto {
  return {
    Name: source?.name,
    Value: source?.value,
  };
}
