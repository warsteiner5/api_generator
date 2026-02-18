import { IsActualOffersParamAlt } from '../../models/is-actual-offers-param-alt.interface';
import { ApiIsActualOffersParamAltDto } from '../../../swagger/models/api-is-actual-offers-param';

export function adaptApiIsActualOffersParamAltDto(source?: IsActualOffersParamAlt | null): ApiIsActualOffersParamAltDto {
  return {
    Ids: source?.ids ?? [],
  };
}
