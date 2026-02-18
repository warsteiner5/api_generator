import { ApiGetPowerOfAttorneyDto } from '../../../swagger/models/api-get-power-of-attorney-dto';
import { GetPowerOfAttorney } from '../../models/get-power-of-attorney.interface';

export function adaptGetPowerOfAttorneyToUI(source?: ApiGetPowerOfAttorneyDto | null): GetPowerOfAttorney {
  return {
    dealId: source?.DealId ?? 0,
    signedData: source?.SignedData ?? '',
    thumbprint: source?.Thumbprint ?? '',
  };
}
