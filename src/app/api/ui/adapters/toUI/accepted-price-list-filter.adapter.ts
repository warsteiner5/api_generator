import { ApiAcceptedPriceListFilterDto } from '../../../swagger/models/api-accepted-price-list-filter-dto';
import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';

export function adaptAcceptedPriceListFilterToUI(source?: ApiAcceptedPriceListFilterDto | null): AcceptedPriceListFilter {
  return (source ?? {}) as AcceptedPriceListFilter;
}
