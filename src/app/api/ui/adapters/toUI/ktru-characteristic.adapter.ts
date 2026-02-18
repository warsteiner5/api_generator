import { ApiKtruCharacteristicDto } from '../../../swagger/models/api-ktru-characteristic-dto';
import { KtruCharacteristic } from '../../models/ktru-characteristic.interface';

export function adaptKtruCharacteristicToUI(source?: ApiKtruCharacteristicDto | null): KtruCharacteristic {
  return {
    name: source?.Name ?? '',
    value: source?.Value ?? '',
  };
}
