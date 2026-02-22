import { PriceListFilter } from '../../models/price-list-filter.interface';
import { ApiPriceListFilterDto } from '../../../swagger/models/api-price-list-filter-dto';

export const apiPriceListFilterDtoAdapter = (source?: PriceListFilter | null): ApiPriceListFilterDto => {
  return (source ?? {}) as ApiPriceListFilterDto;
}
