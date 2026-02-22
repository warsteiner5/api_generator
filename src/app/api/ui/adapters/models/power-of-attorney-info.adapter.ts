import { ApiPowerOfAttorneyInfoDto } from '../../../swagger/models/api-power-of-attorney-info-dto';
import { PowerOfAttorneyInfo } from '../../models/power-of-attorney-info.interface';

export const powerOfAttorneyInfoAdapter = (source?: ApiPowerOfAttorneyInfoDto | null): PowerOfAttorneyInfo => {
  return {
    expiryDate: source?.ExpiryDate,
    id: source?.Id,
    number: source?.Number,
    source: source?.Source,
  };
}
