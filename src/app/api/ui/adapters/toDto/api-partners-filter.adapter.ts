import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { ApiPartnersFilterAltDto } from '../../../swagger/models/api-partners-filter';

export function adaptApiPartnersFilterAltDto(source?: PartnersFilterAlt | null): ApiPartnersFilterAltDto {
  return (source ?? {}) as ApiPartnersFilterAltDto;
}
