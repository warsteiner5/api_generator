import { PowerOfAttorneyInfo } from '../../models/power-of-attorney-info.interface';
import { ApiPowerOfAttorneyInfoDto } from '../../../swagger/models/api-power-of-attorney-info-dto';

export const apiPowerOfAttorneyInfoDtoAdapter = (source?: PowerOfAttorneyInfo | null): ApiPowerOfAttorneyInfoDto => {
  return {
    ExpiryDate: source?.expiryDate,
    Id: source?.id,
    Number: source?.number,
    Source: source?.source,
  };
}
