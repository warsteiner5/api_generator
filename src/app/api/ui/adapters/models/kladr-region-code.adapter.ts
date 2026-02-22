import { ApiKladrRegionCodeDto } from '../../../swagger/models/api-kladr-region-code-dto';
import { KladrRegionCode } from '../../models/kladr-region-code.interface';

export const kladrRegionCodeAdapter = (source?: ApiKladrRegionCodeDto | null): KladrRegionCode => {
  return {
    altCode: source?.AltCode,
    deliveryPlace: source?.DeliveryPlace,
    id: source?.Id,
    kladrCode: source?.KladrCode,
    name: source?.Name,
  };
}
