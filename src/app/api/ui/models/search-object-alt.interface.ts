import { BaseFieldAlt } from './base-field-alt.interface';
import { SearchPagingObjectAlt } from './search-paging-object-alt.interface';
import { SortedFieldAlt } from './sorted-field-alt.interface';

export interface SearchObjectAlt {
  filtering: BaseFieldAlt[];
  paging: SearchPagingObjectAlt;
  sorting: SortedFieldAlt[];
}
