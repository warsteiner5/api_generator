import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { ApiPartnersFilterAltDto } from '../../../swagger/models/api-partners-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiPartnersFilterAltDtoAdapter = (source?: PartnersFilterAlt | null): ApiPartnersFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
  };
}
