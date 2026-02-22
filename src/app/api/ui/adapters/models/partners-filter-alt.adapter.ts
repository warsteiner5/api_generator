import { ApiPartnersFilterAltDto } from '../../../swagger/models/api-partners-filter';
import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';

export const partnersFilterAltAdapter = (source?: ApiPartnersFilterAltDto | null): PartnersFilterAlt => {
  return (source ?? {}) as PartnersFilterAlt;
}
