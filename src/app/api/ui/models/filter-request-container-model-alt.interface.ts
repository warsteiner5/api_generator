import { FilterAlt } from './filter-alt.interface';

// @ts-ignore
export interface FilterRequestContainerModelAlt {
  and: FilterRequestContainerModelAlt[];
  filter: FilterAlt;
  or: FilterRequestContainerModelAlt[];
}
