import { ApiGetPowerOfAttorneyDto } from '../../../swagger/models/api-get-power-of-attorney-dto';
import { GetPowerOfAttorney } from '../../models/get-power-of-attorney.interface';

export const getPowerOfAttorneyAdapter = (source?: ApiGetPowerOfAttorneyDto | null): GetPowerOfAttorney => {
  return {
    dealId: source?.DealId,
    signedData: source?.SignedData,
    thumbprint: source?.Thumbprint,
  };
}
