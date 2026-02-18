import { PriceListFilter } from '../../models/price-list-filter.interface';
import { ApiPriceListFilterDto } from '../../../swagger/models/api-price-list-filter-dto';

export function adaptApiPriceListFilterDto(source?: PriceListFilter | null): ApiPriceListFilterDto {
  return (source ?? {}) as ApiPriceListFilterDto;
}
