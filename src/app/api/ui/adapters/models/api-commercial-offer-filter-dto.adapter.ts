import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';
import { ApiCommercialOfferFilterDto } from '../../../swagger/models/api-commercial-offer-filter-dto';

export const apiCommercialOfferFilterDtoAdapter = (source?: CommercialOfferFilter | null): ApiCommercialOfferFilterDto => {
  return (source ?? {}) as ApiCommercialOfferFilterDto;
}
