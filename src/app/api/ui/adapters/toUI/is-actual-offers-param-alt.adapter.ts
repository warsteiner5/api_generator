import { ApiIsActualOffersParamAltDto } from '../../../swagger/models/api-is-actual-offers-param';
import { IsActualOffersParamAlt } from '../../models/is-actual-offers-param-alt.interface';

export function adaptIsActualOffersParamAltToUI(source?: ApiIsActualOffersParamAltDto | null): IsActualOffersParamAlt {
  return {
    ids: source?.Ids ?? [],
  };
}
