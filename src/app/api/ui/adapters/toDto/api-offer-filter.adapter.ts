import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ApiOfferFilterAltDto } from '../../../swagger/models/api-offer-filter';

export function adaptApiOfferFilterAltDto(source?: OfferFilterAlt | null): ApiOfferFilterAltDto {
  return (source ?? {}) as ApiOfferFilterAltDto;
}
