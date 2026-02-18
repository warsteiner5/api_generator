import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { ApiStarRequestAltDto } from '../../../swagger/models/api-star-request';
import { adaptApiFilterAltDto } from './api-filter.adapter';
import { adaptApiFilterRequestContainerModelAltDto } from './api-filter-request-container-model.adapter';

export function adaptApiStarRequestAltDto(source?: StarRequestAlt | null): ApiStarRequestAltDto {
  return {
    And: (source?.and ?? []).map((item) => adaptApiFilterRequestContainerModelAltDto(item)),
    Filter: adaptApiFilterAltDto(source?.filter),
    IsAscendingSorting: source?.isAscendingSorting,
    Or: (source?.or ?? []).map((item) => adaptApiFilterRequestContainerModelAltDto(item)),
    SearchQuery: source?.searchQuery,
    Skip: source?.skip,
    Sort: source?.sort,
    Top: source?.top,
    Type: source?.type,
  };
}
