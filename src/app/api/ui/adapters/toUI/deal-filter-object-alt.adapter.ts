import { ApiDealFilterObjectAltDto } from '../../../swagger/models/api-deal-filter-object';
import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';

export function adaptDealFilterObjectAltToUI(source?: ApiDealFilterObjectAltDto | null): DealFilterObjectAlt {
  return (source ?? {}) as DealFilterObjectAlt;
}
