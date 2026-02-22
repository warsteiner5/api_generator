import { PublicOffersParamAlt } from '../../models/public-offers-param-alt.interface';
import { ApiPublicOffersParamAltDto } from '../../../swagger/models/api-public-offers-param';

export const apiPublicOffersParamAltDtoAdapter = (source?: PublicOffersParamAlt | null): ApiPublicOffersParamAltDto => {
  return {
    Ids: source?.ids,
  };
}
