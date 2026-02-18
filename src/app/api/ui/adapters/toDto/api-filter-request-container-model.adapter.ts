import { FilterRequestContainerModelAlt } from '../../models/filter-request-container-model-alt.interface';
import { ApiFilterRequestContainerModelAltDto } from '../../../swagger/models/api-filter-request-container-model';
import { adaptApiFilterAltDto } from './api-filter.adapter';

export function adaptApiFilterRequestContainerModelAltDto(source?: FilterRequestContainerModelAlt | null): ApiFilterRequestContainerModelAltDto {
  return {
    And: (source?.and ?? []).map((item) => adaptApiFilterRequestContainerModelAltDto(item)),
    Filter: adaptApiFilterAltDto(source?.filter),
    Or: (source?.or ?? []).map((item) => adaptApiFilterRequestContainerModelAltDto(item)),
  };
}
