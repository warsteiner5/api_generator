import { ApiPriceListForAnonymousFilterDto } from '../../../swagger/models/api-price-list-for-anonymous-filter-dto';
import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';

export const priceListForAnonymousFilterAdapter = (source?: ApiPriceListForAnonymousFilterDto | null): PriceListForAnonymousFilter => {
  return (source ?? {}) as PriceListForAnonymousFilter;
}
