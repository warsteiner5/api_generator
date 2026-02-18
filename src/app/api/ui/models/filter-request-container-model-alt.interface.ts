import { FilterAlt } from './filter-alt.interface';

export interface FilterRequestContainerModelAlt {
  and: FilterRequestContainerModelAlt[];
  filter: FilterAlt;
  or: FilterRequestContainerModelAlt[];
}
