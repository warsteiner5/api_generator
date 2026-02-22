import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { ApiDealFilterObjectAltDto } from '../../../swagger/models/api-deal-filter-object';

export const apiDealFilterObjectAltDtoAdapter = (source?: DealFilterObjectAlt | null): ApiDealFilterObjectAltDto => {
  return (source ?? {}) as ApiDealFilterObjectAltDto;
}
