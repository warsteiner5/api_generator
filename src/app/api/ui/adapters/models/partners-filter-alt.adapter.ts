import { ApiPartnersFilterAltDto } from '../../../swagger/models/api-partners-filter';
import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const partnersFilterAltAdapter = (source?: ApiPartnersFilterAltDto | null): PartnersFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
  };
}
