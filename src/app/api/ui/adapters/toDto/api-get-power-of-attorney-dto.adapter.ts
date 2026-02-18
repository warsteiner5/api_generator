import { GetPowerOfAttorney } from '../../models/get-power-of-attorney.interface';
import { ApiGetPowerOfAttorneyDto } from '../../../swagger/models/api-get-power-of-attorney-dto';

export function adaptApiGetPowerOfAttorneyDto(source?: GetPowerOfAttorney | null): ApiGetPowerOfAttorneyDto {
  return {
    DealId: source?.dealId,
    SignedData: source?.signedData,
    Thumbprint: source?.thumbprint,
  };
}
