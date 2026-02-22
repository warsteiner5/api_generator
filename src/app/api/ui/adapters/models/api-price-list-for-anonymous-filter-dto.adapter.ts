import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';
import { ApiPriceListForAnonymousFilterDto } from '../../../swagger/models/api-price-list-for-anonymous-filter-dto';

export const apiPriceListForAnonymousFilterDtoAdapter = (source?: PriceListForAnonymousFilter | null): ApiPriceListForAnonymousFilterDto => {
  return (source ?? {}) as ApiPriceListForAnonymousFilterDto;
}
