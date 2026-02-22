import { ApiPriceListFilterDto } from '../../../swagger/models/api-price-list-filter-dto';
import { PriceListFilter } from '../../models/price-list-filter.interface';

export const priceListFilterAdapter = (source?: ApiPriceListFilterDto | null): PriceListFilter => {
  return (source ?? {}) as PriceListFilter;
}
