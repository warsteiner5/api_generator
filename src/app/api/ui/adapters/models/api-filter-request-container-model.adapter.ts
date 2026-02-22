import { FilterRequestContainerModelAlt } from '../../models/filter-request-container-model-alt.interface';
import { ApiFilterRequestContainerModelAltDto } from '../../../swagger/models/api-filter-request-container-model';
import { apiFilterAltDtoAdapter } from './api-filter.adapter';

export const apiFilterRequestContainerModelAltDtoAdapter = (source?: FilterRequestContainerModelAlt | null): ApiFilterRequestContainerModelAltDto => {
  return {
    And: source?.and?.map((item) => apiFilterRequestContainerModelAltDtoAdapter(item)),
    Filter: source?.filter === null ? undefined : apiFilterAltDtoAdapter(source?.filter),
    Or: source?.or?.map((item) => apiFilterRequestContainerModelAltDtoAdapter(item)),
  };
}
