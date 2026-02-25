import { ApiAcceptedPriceListsExtendedResultAltDto } from '../../../swagger/models/api-accepted-price-lists-extended-result';
import { AcceptedPriceListsExtendedResultAlt } from '../../models/accepted-price-lists-extended-result-alt.interface';
import { marketPaginationResultOfListOfAcceptedPriceListInfoAdapter } from './market-pagination-result-of-list-of-accepted-price-list-info.adapter';

export const acceptedPriceListsExtendedResultAltAdapter = (source?: ApiAcceptedPriceListsExtendedResultAltDto | null): AcceptedPriceListsExtendedResultAlt => {
  return {
    ...marketPaginationResultOfListOfAcceptedPriceListInfoAdapter(source as unknown as Parameters<typeof marketPaginationResultOfListOfAcceptedPriceListInfoAdapter>[0]),
    minPrice: source?.MinPrice,
    averagePrice: source?.AveragePrice,
  };
}
