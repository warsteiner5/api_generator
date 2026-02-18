import { PublicOffersParamAlt } from '../../models/public-offers-param-alt.interface';
import { ApiPublicOffersParamAltDto } from '../../../swagger/models/api-public-offers-param';

export function adaptApiPublicOffersParamAltDto(source?: PublicOffersParamAlt | null): ApiPublicOffersParamAltDto {
  return {
    Ids: source?.ids ?? [],
  };
}
