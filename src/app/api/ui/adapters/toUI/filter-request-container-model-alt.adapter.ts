import { ApiFilterRequestContainerModelAltDto } from '../../../swagger/models/api-filter-request-container-model';
import { FilterRequestContainerModelAlt } from '../../models/filter-request-container-model-alt.interface';
import { adaptFilterAltToUI } from './filter-alt.adapter';

export function adaptFilterRequestContainerModelAltToUI(source?: ApiFilterRequestContainerModelAltDto | null): FilterRequestContainerModelAlt {
  return {
    and: (source?.And ?? []).map((item) => adaptFilterRequestContainerModelAltToUI(item)),
    filter: adaptFilterAltToUI(source?.Filter),
    or: (source?.Or ?? []).map((item) => adaptFilterRequestContainerModelAltToUI(item)),
  };
}
