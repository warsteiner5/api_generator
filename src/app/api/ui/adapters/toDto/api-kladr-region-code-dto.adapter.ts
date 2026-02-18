import { KladrRegionCode } from '../../models/kladr-region-code.interface';
import { ApiKladrRegionCodeDto } from '../../../swagger/models/api-kladr-region-code-dto';

export function adaptApiKladrRegionCodeDto(source?: KladrRegionCode | null): ApiKladrRegionCodeDto {
  return {
    AltCode: source?.altCode,
    DeliveryPlace: source?.deliveryPlace,
    Id: source?.id,
    KladrCode: source?.kladrCode,
    Name: source?.name,
  };
}
