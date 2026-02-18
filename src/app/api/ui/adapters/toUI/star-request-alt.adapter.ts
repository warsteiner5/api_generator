import { ApiStarRequestAltDto } from '../../../swagger/models/api-star-request';
import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { adaptFilterAltToUI } from './filter-alt.adapter';
import { adaptFilterRequestContainerModelAltToUI } from './filter-request-container-model-alt.adapter';

export function adaptStarRequestAltToUI(source?: ApiStarRequestAltDto | null): StarRequestAlt {
  return {
    and: (source?.And ?? []).map((item) => adaptFilterRequestContainerModelAltToUI(item)),
    filter: adaptFilterAltToUI(source?.Filter),
    isAscendingSorting: source?.IsAscendingSorting ?? false,
    or: (source?.Or ?? []).map((item) => adaptFilterRequestContainerModelAltToUI(item)),
    searchQuery: source?.SearchQuery ?? '',
    skip: source?.Skip ?? 0,
    sort: source?.Sort ?? '',
    top: source?.Top ?? 0,
    type: source?.Type ?? '',
  };
}
