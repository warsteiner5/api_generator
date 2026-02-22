import { ApiCommercialOfferFilterDto } from '../../../swagger/models/api-commercial-offer-filter-dto';
import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';

export const commercialOfferFilterAdapter = (source?: ApiCommercialOfferFilterDto | null): CommercialOfferFilter => {
  return (source ?? {}) as CommercialOfferFilter;
}
