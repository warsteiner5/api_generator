import { ApiOfferFilterAltDto } from '../../../swagger/models/api-offer-filter';
import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';

export function adaptOfferFilterAltToUI(source?: ApiOfferFilterAltDto | null): OfferFilterAlt {
  return (source ?? {}) as OfferFilterAlt;
}
