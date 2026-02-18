import { ApiAcceptedPriceListsExtendedResultAltDto } from '../../../swagger/models/api-accepted-price-lists-extended-result';
import { AcceptedPriceListsExtendedResultAlt } from '../../models/accepted-price-lists-extended-result-alt.interface';

export function adaptAcceptedPriceListsExtendedResultAltToUI(source?: ApiAcceptedPriceListsExtendedResultAltDto | null): AcceptedPriceListsExtendedResultAlt {
  return (source ?? {}) as AcceptedPriceListsExtendedResultAlt;
}
