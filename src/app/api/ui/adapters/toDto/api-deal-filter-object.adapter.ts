import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { ApiDealFilterObjectAltDto } from '../../../swagger/models/api-deal-filter-object';

export function adaptApiDealFilterObjectAltDto(source?: DealFilterObjectAlt | null): ApiDealFilterObjectAltDto {
  return (source ?? {}) as ApiDealFilterObjectAltDto;
}
