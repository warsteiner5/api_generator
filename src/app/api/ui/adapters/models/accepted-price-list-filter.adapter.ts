import { ApiAcceptedPriceListFilterDto } from '../../../swagger/models/api-accepted-price-list-filter-dto';
import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';

export const acceptedPriceListFilterAdapter = (source?: ApiAcceptedPriceListFilterDto | null): AcceptedPriceListFilter => {
  return (source ?? {}) as AcceptedPriceListFilter;
}
