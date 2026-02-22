import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { ApiStarRequestAltDto } from '../../../swagger/models/api-star-request';
import { apiFilterAltDtoAdapter } from './api-filter.adapter';
import { apiFilterRequestContainerModelAltDtoAdapter } from './api-filter-request-container-model.adapter';

export const apiStarRequestAltDtoAdapter = (source?: StarRequestAlt | null): ApiStarRequestAltDto => {
  return {
    And: source?.and?.map((item) => apiFilterRequestContainerModelAltDtoAdapter(item)),
    Filter: source?.filter === null ? undefined : apiFilterAltDtoAdapter(source?.filter),
    IsAscendingSorting: source?.isAscendingSorting,
    Or: source?.or?.map((item) => apiFilterRequestContainerModelAltDtoAdapter(item)),
    SearchQuery: source?.searchQuery,
    Skip: source?.skip,
    Sort: source?.sort,
    Top: source?.top,
    Type: source?.type,
  };
}
