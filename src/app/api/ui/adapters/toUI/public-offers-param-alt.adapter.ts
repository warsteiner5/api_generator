import { ApiPublicOffersParamAltDto } from '../../../swagger/models/api-public-offers-param';
import { PublicOffersParamAlt } from '../../models/public-offers-param-alt.interface';

export function adaptPublicOffersParamAltToUI(source?: ApiPublicOffersParamAltDto | null): PublicOffersParamAlt {
  return {
    ids: source?.Ids ?? [],
  };
}
