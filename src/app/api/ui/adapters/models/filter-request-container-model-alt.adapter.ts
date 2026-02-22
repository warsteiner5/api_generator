import { ApiFilterRequestContainerModelAltDto } from '../../../swagger/models/api-filter-request-container-model';
import { FilterRequestContainerModelAlt } from '../../models/filter-request-container-model-alt.interface';
import { filterAltAdapter } from './filter-alt.adapter';

export const filterRequestContainerModelAltAdapter = (source?: ApiFilterRequestContainerModelAltDto | null): FilterRequestContainerModelAlt => {
  return {
    and: source?.And?.map((item) => filterRequestContainerModelAltAdapter(item)),
    filter: source?.Filter === null ? undefined : filterAltAdapter(source?.Filter),
    or: source?.Or?.map((item) => filterRequestContainerModelAltAdapter(item)),
  };
}
