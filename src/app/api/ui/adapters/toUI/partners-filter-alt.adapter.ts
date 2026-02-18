import { ApiPartnersFilterAltDto } from '../../../swagger/models/api-partners-filter';
import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';

export function adaptPartnersFilterAltToUI(source?: ApiPartnersFilterAltDto | null): PartnersFilterAlt {
  return (source ?? {}) as PartnersFilterAlt;
}
