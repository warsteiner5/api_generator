import { ApiKladrRegionCodeDto } from '../../../swagger/models/api-kladr-region-code-dto';
import { KladrRegionCode } from '../../models/kladr-region-code.interface';

export function adaptKladrRegionCodeToUI(source?: ApiKladrRegionCodeDto | null): KladrRegionCode {
  return {
    altCode: source?.AltCode ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    id: source?.Id ?? 0,
    kladrCode: source?.KladrCode ?? '',
    name: source?.Name ?? '',
  };
}
