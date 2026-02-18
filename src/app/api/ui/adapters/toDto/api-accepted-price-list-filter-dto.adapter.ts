import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { ApiAcceptedPriceListFilterDto } from '../../../swagger/models/api-accepted-price-list-filter-dto';

export function adaptApiAcceptedPriceListFilterDto(source?: AcceptedPriceListFilter | null): ApiAcceptedPriceListFilterDto {
  return (source ?? {}) as ApiAcceptedPriceListFilterDto;
}
