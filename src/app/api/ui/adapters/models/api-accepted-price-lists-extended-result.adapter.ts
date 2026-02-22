import { AcceptedPriceListsExtendedResultAlt } from '../../models/accepted-price-lists-extended-result-alt.interface';
import { ApiAcceptedPriceListsExtendedResultAltDto } from '../../../swagger/models/api-accepted-price-lists-extended-result';

export const apiAcceptedPriceListsExtendedResultAltDtoAdapter = (source?: AcceptedPriceListsExtendedResultAlt | null): ApiAcceptedPriceListsExtendedResultAltDto => {
  return (source ?? {}) as ApiAcceptedPriceListsExtendedResultAltDto;
}
