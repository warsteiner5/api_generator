import { ApiStarRequestAltDto } from '../../../swagger/models/api-star-request';
import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { filterAltAdapter } from './filter-alt.adapter';
import { filterRequestContainerModelAltAdapter } from './filter-request-container-model-alt.adapter';

export const starRequestAltAdapter = (source?: ApiStarRequestAltDto | null): StarRequestAlt => {
  return {
    and: source?.And?.map((item) => filterRequestContainerModelAltAdapter(item)),
    filter: source?.Filter === null ? undefined : filterAltAdapter(source?.Filter),
    isAscendingSorting: source?.IsAscendingSorting,
    or: source?.Or?.map((item) => filterRequestContainerModelAltAdapter(item)),
    searchQuery: source?.SearchQuery,
    skip: source?.Skip,
    sort: source?.Sort,
    top: source?.Top,
    type: source?.Type,
  };
}
