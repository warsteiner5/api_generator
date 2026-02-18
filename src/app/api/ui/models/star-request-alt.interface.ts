import { FilterAlt } from './filter-alt.interface';
import { FilterRequestContainerModelAlt } from './filter-request-container-model-alt.interface';

export interface StarRequestAlt {
  and: FilterRequestContainerModelAlt[];
  filter: FilterAlt;
  isAscendingSorting: boolean;
  or: FilterRequestContainerModelAlt[];
  searchQuery: string;
  skip: number;
  sort: string;
  top: number;
  type: string;
}
